const socket = require("socket.io");

module.exports = (server) => {
  const io = socket(server);
  io.on("connection", (ws) => {
    // ws.on("message", () => {
    //   io.emit("message", ws.data);
    // });
    ws.on("join", (data) => {
      io.emit("join", data);
    });
    ws.on("message", (data) => {
      io.emit("message", data);
      //   ws.broadcast.emit("message","data")
    });
    // ws.on("disconnect", () => {
    //   console.log("disconnection");
    //   io.emit("disconnect1", "잘가");
    // });
  });
};
