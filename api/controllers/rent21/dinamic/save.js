if(req.user && (req.user.isAdmin || req.user.isRieltor) && req.user.DOSTUP.indexOf('Поиск')> -1) {

  const promiseAR = [];

  for (var key in req.body) {
    switch (key) {
      case 'ob21':
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21ob.update(
            {
              fields: req.body[key]
            },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              resolve({ 'body': req.body })
            }
          })
        }));
        break
      case 'address':
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21address.update(
            {
              fields: req.body[key]
            },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              resolve({ 'body': req.body })
            }
          })
        }));
        break
      case 'building':
        promiseAR.push(new Promise(function (resolve, reject) {
          db.rent21building.update(
            { fields: req.body[key] },
            {
              where: {
                uid: req.body[key].UID
              },
            }
          ).then(item => {
            if (item[0] == 0) {
              reject({ 'error': 405 })
            } else {
              resolve({ 'body': req.body })
            }
          })
        }));
        break
      default:
    }
  }
  Promise.all(promiseAR).then(
    result => {
      res.json({ status: true })
    },
    error => res.json({ status: false })
  )
}else{
  res.json({error : 401})
}
