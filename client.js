const net = require('net');

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.0.102',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('data', data => {
    console.log('Server says: ', data);
  });
  setupInput();
  conn.on('connect', () => {
    conn.write('Name: XHX');
    conn.write(`Move: ${setupInput()}`);
    // setInterval(()=>{
    //   conn.write('Move: down');

    // },100);
  });

  return conn;
};

module.exports = { connect };