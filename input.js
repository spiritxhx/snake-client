/* eslint-disable indent */

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
};
const stdin = process.stdin;

const handleUserInput = stdin.on('data', (key) => {
  switch (key) {
    case '\u0003': {
      console.log(`Thanks for using me, ciao!`);
      process.exit();
      break;
    }
    case 'w': connection.write('Move: up'); break;
    case 'a': connection.write('Move: left'); break;
    case 's': connection.write('Move: down'); break;
    case 'd': connection.write('Move: right'); break;
    case 'l': connection.write('Say: PFF'); break;
  }
});



module.exports = { setupInput };