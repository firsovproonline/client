if(!req.user || (!req.user.isAdmin && !req.user.isRieltor)){
  res.json({'error':401})
}else{
  const e = req.originalUrl.split('/');
  const id = e[e.length - 1]
  delete req.body.createdAt
  delete req.body.updatedAt
  delete req.body.id
  if(req.user.isAdmin){
    db.impressins.update(
      req.body,
      {
        where: {
          id: id
        },
      }
    ).then(item=>{
      if(item[0]==0){
        res.json({'error':405})
      }else{
        res.json({'body':req.body,user:req.user,row:item})
      }
    })

  }else{
    db.impressins.update(
      req.body,
      {
        where: {
          id: id,
          user:req.user.emails[0].value
        },
      }
    ).then(item=>{
      if(item[0]==0){
        res.json({'error':405})
      }else{
        res.json({'body':req.body,user:req.user,row:item})
      }
    })

  }
}
