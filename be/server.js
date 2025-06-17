import { Server } from "socket.io";

const io = new Server(3000, {
    cors: {
        origin: ["http://localhost:5173"],
    },
});

io.on("connection", (socket) => {
    socket.on("send", ({ socketId, username, message }) => {
        io.emit("receive", { socketId, username, message });
    });
});
