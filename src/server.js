const express=require('express')
const {Server:IOServer}=require('socket.io')
const path = require('path')
const app = express()
const expressServer = app.listen(8080,()=> console.log('servidor escuchando puerto 8080'))
const io = new IOServer(expressServer)
messagesArray=[]

app.use(express.static(path.join(__dirname, '../public/')))

io.on('connection', socket=>{
    console.log(`se conecto un usuario ${socket.id}`)
    
    socket.on('client:message', messageInfo =>{
        messagesArray.push(messageInfo)
        io.emit('server:messages')
    })
})