const { EventEmitter } = require('events');

const emitter = new EventEmitter();

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`)
}

emitter.on('birthday', birthdayEventListener);

emitter.emit('birthday', { name: 'Galih' });

