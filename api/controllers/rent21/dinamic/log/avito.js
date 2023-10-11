const fileContent = fs.readFileSync(__dirname+'/../../config/avitoreport.json', "utf8");
res.json(JSON.parse(fileContent))
