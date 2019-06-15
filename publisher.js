const sensor = require("node-dht-sensor");
const Poller = require('./Poll');
const poller = new Poller(100);

main();
poller.poll();

function main() {

    poller.onPoll(async () => {

        await sensor.read(11, 4, function(err, temperature, humidity) {
            if (!err) {
                console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
            }
            poller.poll();
        });

    });
}
