import { createContext } from "react";
import type { Socket } from "socket.io-client";

type SocketContextType = {
    socket: Socket | null;
    setSocket: (socket: Socket) => void;
    username: string;
    setUsername: (username: string) => void;
};

export const socketContextValues: SocketContextType = {
    socket: null,
    setSocket: () => {},
    username: "",
    setUsername: () => {},
};

export const SocketContext =
    createContext<SocketContextType>(socketContextValues);
