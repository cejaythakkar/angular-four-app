var server = require('ws').Server;
var serverInstance = new server({port : 5001});

serverInstance.on('connection',(ws) => {
    ws.on('message',(message) => {
        
        message = JSON.parse(message);

        if(message.type == 'name'){
            ws.personName = message.data;
            return;
        }

        serverInstance.clients.forEach(( client ) => {
            if(client != ws)
                client.send(JSON.stringify({
                    name : ws.personName,
                    data : message.data
                }));
        });
        console.log(`received message ` + message);
    });

    ws.on('close', () => {
        console.log('lost a client');
    });

    console.log('a client connected');
});

module.exports = serverInstance;