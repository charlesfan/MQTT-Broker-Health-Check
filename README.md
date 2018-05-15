# MQTT-Broker-Health-Check
* Publish interval: 0.5s
* Publish Topic: /lab/pub
* Checking Topic: /lab/check
### Publish
```
$ node publish.js
```
### subscribe
```
$ node subscriber.js <id>
```
### Create docker image
```
$ cd <PROJECT_PATH>/image
$ docker build -t="liteon/mqtt-broker-checker:0.0.1" .
```
### Run in docker
```
$ docker run --name checker -d liteon/mqtt-broker-checker:0.0.1
```
