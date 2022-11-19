const db = require("../models");

exports.list = (req, res) => {
  db.sequelizePg.query(`SELECT impressions.id,impressions.title,impressions.fields,substring( json_extract_path(json_extract_path(json_extract_path(impressions.fields,'TEL'),'0'),'val')::text,2,12) as phone,
                callzvons.client_number as callphone, callzvons.start_time
                    FROM impressions
                       LEFT JOIN callzvons ON callzvons.client_number::text = substring( json_extract_path(json_extract_path(json_extract_path(impressions.fields,'TEL'),'0'),'val')::text,2,12)
                    WHERE impressions.title = 'Мария агент ('
                    ORDER BY  callzvons.start_time DESC
                LIMIT 40`, {
    raw: true, //если для таблицы, к которой происходит обращение, не определена модель
  }).then((items) => {
    res.json(items[0])
  })
}
