var sensor = require("node-dht-sensor");

sensor.read(11, 39, function(err, temperature, humidity) {
    if (!err) {
        console.log(`temp: ${temperature}°C, humidity: ${humidity}%`);
    }
});