import { EventEmitter} from 'events';

class Socket {
    constructor(webSocket = new WebSocket(), eventEmitter = new EventEmitter()) {

        this.webSocket = webSocket;
        this.eventEmitter = eventEmitter;
        webSocket.onmessage = this.message.bind(this);
        webSocket.onopen = this.onOpen.bind(this);
        webSocket.onclose = this.onClose.bind(this);
    }
    // Start a new listener event
    on(name, func) {
        this.eventEmitter.on(name, func);
    }
    // Stop the listener event
    off(name, func) {
        this.eventEmitter.removeListener(name, func);
    }
    // Send data to the socket
    emit(name, data) {
        const message = JSON.stringify({name, data});
        this.webSocket.send(message);
    }
    // send message to the socket
    message(e) {
        try {
            const message = JSON.parse(e.data);
            this.eventEmitter.emit(message.name, message.data);       
        }
        catch(err) {
            this.eventEmitter.emit('error', err);
        }
    }

    onOpen() {
        this.eventEmitter.emit('connect');
    }

    onClose() {
        this.eventEmitter.emit('disconnect');
    }
}

export default Socket;