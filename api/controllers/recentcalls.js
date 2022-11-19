const db = require("../models");

exports.list = (req, res) => {
  db.sequelizePg.query(`SELECT callzvons.client_number, callzvons.client_name, callzvons.id, callzvons.start_time, callzvons.user_id, users.title,
            impressions.title as impression, impressions.id as impression_id
            FROM callzvons
                LEFT JOIN users ON users.email = callzvons.user_account
                LEFT JOIN impressions ON callzvons.client_number = substring(json_extract_path(json_extract_path(json_extract_path(impressions.fields,'TEL'),'0'),'val')::text,2,12)
                ORDER BY  callzvons.start_time DESC
                LIMIT 40`, {
    raw: true, //если для таблицы, к которой происходит обращение, не определена модель
  }).then((items) => {
    res.json(items[0])
  })
}
