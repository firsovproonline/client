const fileContent = fs.readFileSync(__dirname+'/../../config/cianreport1.json', "utf8");
res.json(JSON.parse(fileContent))
