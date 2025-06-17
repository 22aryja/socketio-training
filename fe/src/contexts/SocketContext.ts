import { createContext } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";

type SocketContextType = {
    socket: Socket;
    username: string;
    setUsername: (username: string) => void;
};

const socket = io("http://localhost:3000");

export const socketContextValues: SocketContextType = {
    socket,
    username: "",
    setUsername: () => {},
};

export const SocketContext =
    createContext<SocketContextType>(socketContextValues);
