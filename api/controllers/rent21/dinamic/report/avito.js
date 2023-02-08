const fileContent = fs.readFileSync(__dirname+'/../../avitoreport.json', "utf8");
res.json(JSON.parse(fileContent))
