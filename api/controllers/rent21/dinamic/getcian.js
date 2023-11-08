console.log('load export Cian')
var timerIdCian = setInterval(function() {
  console.log("get CIAN")

  var request = require('request');
  request({
    url: "https://public-api.cian.ru/v1/get-order",
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjI0MTQzNDd9.tnl_IpjFbd6npeK5eZawYTOxmBudZMLey70YhS3jRQs",
      "content-type": "application/json"
    },
    body: ""
  }, function(error, response, body) {
    if (error) {

    }
    else {
      if (response.statusCode == 200) {
        var J = JSON.parse(body);
        var ob = {};
        for (var i = 0; i < J.result.offers.length; i++) {
          ob[J.result.offers[i].externalId] = J.result.offers[i];
        }
        fs.writeFileSync(__dirname + '/config/cianreport.json', JSON.stringify(ob))
      }
      else {

      }
    }
  });

  request({
    url: "https://public-api.cian.ru/v1/get-order",
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjg4NDU2Nn0.CoaLFWfCsb7B__GGP0t7OMWO_n7Hajhwkq3u9YxWHrw",
      "content-type": "application/json"
    },
    body: ""
  }, function(error, response, body) {
    if (error) {

    }
    else {
      if (response.statusCode == 200) {
        var J = JSON.parse(body);
        //console.log('cian ==== ', J)
        var ob = {};
        for (var i = 0; i < J.result.offers.length; i++) {
          ob[J.result.offers[i].externalId] = J.result.offers[i];
        }
        fs.writeFileSync(__dirname + '/config/cianreport1.json', JSON.stringify(ob))
      }
      else {

      }
    }
  });

  request.post('https://api.avito.ru/token/?grant_type=client_credentials&client_id=IYakbUJeEieLz93hCnT3&client_secret=z8EaNtc5IYBJWL-YHY37nDYjm4SmsCcNGRI7XJ18',
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        fs.writeFileSync(__dirname + '/config/avitoreport_token.text', body);

        const access_token = JSON.parse(body).access_token;
        var options = {
          url: 'https://api.avito.ru/autoload/v2/reports/last_completed_report',
          headers: {
            'Authorization': 'Bearer ' + access_token
          }
        };
        function callback(error, response, body) {
          if (!error && response.statusCode == 200) {
            try {
              fs.writeFileSync(__dirname + '/config/avitoreport_full.json', body);
              const J = JSON.parse(body);
              const report_id = J.report_id
              const section_stats = J.section_stats
              const pages = Math.floor(section_stats.count / 50)
              let avitoItens = []
              const promiseAR = [];
              for (let i=0;i<=pages;i++){
                promiseAR.push(new Promise(function(resolve, reject) {
                  const reportOptions = {
                    url: 'https://api.avito.ru/autoload/v2/reports/'+report_id+'/items?page='+i,
                    headers: {
                      'Authorization': 'Bearer ' + access_token
                    }
                  }
                  request(reportOptions,(error, response, body) =>{
                    if (!error && response.statusCode == 200) {
                      resolve({
                        res: JSON.parse(body)
                      })
                    }else{
                      reject({})
                    }
                  });

                }));
              }
              Promise.all(promiseAR).then(
                result => {
                  fs.writeFileSync(__dirname + '/config/avitoreport.text', JSON.stringify(result));
                  for (var i = 0; i < result.length; i++) {
                    if(result[i].res && result[i].res.items && result[i].res.items.length > 0){
                      avitoItens = avitoItens.concat(result[i].res.items)
                    }
                  }
                  fs.writeFileSync(__dirname + '/config/avitoreport.json', JSON.stringify(avitoItens));
                  //res.json({rows : avitoItens})
                },
                error => {
                  // res.json({rows : 0})
                }
              )
            }
            catch (e) {
              fs.writeFileSync(__dirname + '/config/avitoreport_error.text', body);
            }
          }
          else {}
        }
        request(options, callback);
      }
      else {
        try {
          fs.writeFileSync(__dirname + '/config/avito_error.text', response);
        }catch (err) {
          console.log('Ошибка с avito',response)
        }
      }
    });


}, 300000);
