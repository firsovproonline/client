let fileContent = fs.readFileSync(__dirname+'/../../config/cianreport.json', "utf8");
if(req.query.feed && req.query.feed === 'cian1')
  fileContent = fs.readFileSync(__dirname+'/../../config/cianreport1.json', "utf8");

res.json(JSON.parse(fileContent))
