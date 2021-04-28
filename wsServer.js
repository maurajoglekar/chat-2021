// This web socket server is used for the communication between the client connections so that the
// chat app can do the bonus part and have the chat work across multiple browsers
// please refer to the component that uses this web socket server MessageAddForm
//  Additional changes had to be done to the action/saga to not add to the DB when it's coming from
// the ws.onmessage, we just want to save the new message in the redux store, not DB.
// The actual addition to the DB is done by the browser that added the message

const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3030 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
