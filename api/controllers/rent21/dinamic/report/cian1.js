console.error(__dirname)
const fileContent = fs.readFileSync(__dirname+'/../../cianreport1.json', "utf8");
res.json(JSON.parse(fileContent))
