let app = require("express")();
let server = app.listen(8080, () => {
  console.log("listen to the port 8080");
});

let io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("The socket " + socket.id + " connected");
  socket.on("send message", (data) => {
    console.log(data);
    io.emit("send message", data);
  });
});
