const io = require('socket.io')(3000, {
    cors: {
        origin: "*"
    }
})

const users = {};