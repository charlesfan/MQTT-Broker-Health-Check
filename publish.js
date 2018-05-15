const mqtt = require('mqtt');
const INTERVAL = 100;

//const client = mqtt.createClient(1883, '192.168.86.116', {encoding:'utf8', clientId: 'publish', username: 'publish', password: 'secret'});
const client = mqtt.connect({port: 1883, host: '192.168.86.116'});
client.on('connect', function(re, err){
		if (err) {
			console.log(err)
		}
		let pubCount = ackCount = 0
		setInterval(() => {
			pubCount++;
			let msg = {pub: pubCount};
			client.publish('/lab/pub', JSON.stringify(msg), {qos:2, retain: false}, function(err) {
				if(!err) {
					ackCount++;
					msg.ack = ackCount;
					console.log(msg);
					client.publish('/lab/check', JSON.stringify(msg), {qos:2, retain: false});
				}
			});
		}, INTERVAL);
});
