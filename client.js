const net = require('net');
const { IP, PORT } = require('./constants');

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('data', data => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: XHX');
    setInterval(() => {
      conn.write('Name: XHX');
    }, 5000);
  });

  return conn;
};

module.exports = { connect };