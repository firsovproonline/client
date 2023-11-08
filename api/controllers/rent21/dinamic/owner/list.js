let sql = `SELECT rent21_owners.*
            FROM rent21_owners
                OFFSET 0 LIMIT 50`
//WHERE json_extract_path(rent21_owners.contacts,'contacts')::text LIKE '%(909) 693-07-04%'
//res.json({1:2})

res.db.sequelizePg.query(sql, {
  raw: true
}).then((items) => {
  res.json({rows : items[0]})
})


