import { createContext } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

type SocketContextType = {
    socket: Socket;
};

const socket = io("http://localhost:3000");

export const socketContextValues: SocketContextType = {
    socket,
};

export const SocketContext: React.Context<SocketContextType> =
    createContext(socketContextValues);
