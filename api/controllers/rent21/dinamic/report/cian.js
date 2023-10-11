const fileContent = fs.readFileSync(__dirname+'/../../config/cianreport.json', "utf8");
res.json(JSON.parse(fileContent))
