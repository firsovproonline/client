if(req.user && req.user.isAdmin){
  const fileContent = fs.readFileSync(__dirname+'/../../config/feeds.json', "utf8");
  res.json(JSON.parse(fileContent))
} else{
  res.json({error : 401})
}
