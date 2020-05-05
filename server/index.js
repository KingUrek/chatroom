let app = require("express")();
let server = app.listen(process.env.PORT || 8080, () => {
  console.log("listen to the port 8080");
});

let io = require("socket.io")(server);

let onlineUsers = [];

io.on("connection", (socket) => {
  io.emit("user", onlineUsers);
  console.log("The socket " + socket.id + " connected");
  socket.on("send message", (data) => {
    console.log(data);
    io.to(data.room).emit("send message", data);
  });
  socket.on("userON", (data) => {
    console.log("Novo usuário " + data.user);
    onlineUsers = onlineUsers.filter((e) => e.id !== data.id);
    onlineUsers.push(data);
    io.emit("user", onlineUsers);
  });
  socket.on("disconnect", () => {
    console.log("User " + socket.id + " has disconnected");
    onlineUsers = onlineUsers.filter((e) => e.id !== socket.id);
    io.emit("user", onlineUsers);
  });
  socket.on("join", (data) => {
    socket.join(data, () => {
      console.log("The user " + socket.id + "is in the room" + data);
    });
  });
});
