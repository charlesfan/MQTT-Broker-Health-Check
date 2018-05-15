var mqtt = require('mqtt');

var id = process.argv.slice(2)[0];

//var client = mqtt.createClient(1883, '192.168.86.116',{clean:false,encoding:'utf8', clientId: id || 'temp'});
var client = mqtt.connect({port: 1883, host: '192.168.86.116'});
client.on('connect', function(re, err){
		if (err) {
			console.log(err)
		}
    client.subscribe('/lab/check',{qos:2});
});

client.on('message', function(topic, msg){
    console.log('Received Message:', topic, new Buffer(msg).toString('utf8'));
});
