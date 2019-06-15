const EventEmitter = require('events');

class Poller extends EventEmitter {
    /**
     * @param {int} timeout how long should we wait after the poll started?
     */
    constructor(timeout = 100) {
        super();
        this.timeout = timeout;
    }

    poll() {
        console.log(123123213)
        setTimeout(() => this.emit('poll'), this.timeout);
    }

    onPoll(cb) {
        this.on('poll', cb);
    }
}

module.exports = Poller;