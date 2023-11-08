if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
  res.json({'error':401})
}else{
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  console.error(`SELECT * FROM impressions WHERE id = ` + id)
  res.db.sequelizePg.query(`SELECT * FROM impressions WHERE id = ` + id, {
    raw: true,
  }).then((items) => {
    res.json(items[0][0])
  })
}
