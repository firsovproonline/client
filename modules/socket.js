import { urlencoded } from 'express'

const websocket = require('ws');
const fs = require('fs')
//import { Server } from "socket.io";
export default function () {
  console.error('listen')
  const nuxt = this.nuxt
  this.nuxt.hook('listen', server => {
    console.log('+++++++++++++++++++++++++++++++++++++++')
    const io = new websocket.Server({ server });
    io.on("connection", (ws, request, client) => {
      function headerToJson(header){
        const json1 = {}
        header.split(';').forEach(item=>{
          json1[decodeURIComponent(item.split('=')[0].trim())] = decodeURIComponent(item.split('=')[1])
        })
        return json1
      }
      if(request.headers.cookie){
        let users =JSON.parse(fs.readFileSync('users.json', "utf8"))
        const user = users[headerToJson(request.headers.cookie)['connect.sid']]
        if(user)
          console.log('user', user.username)
      }
    });
/*
    const io = new websocket.Server({ server });
    io.on('connection', (socket) => {
      console.log("CONNECTION", socket.upgradeReq)
      socket.send('11111')
    })

 */
  })

  this.nuxt.hook('render:done', () => {
    console.log('render:done')
  })


}
