const fileContent = fs.readFileSync(__dirname+'/../../cianreport.json', "utf8");
res.json(JSON.parse(fileContent))
