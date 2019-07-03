const net = require('net');
const connect = () => {
  const conn = net.createConnection({
    host: '192.168.0.102',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', ()=>{
    console.log('Successfully connected to game server');
  });

  conn.on('data', data => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', ()=>{
    conn.write('Name: XHX');
  });

  return conn;
};

module.exports = {connect};