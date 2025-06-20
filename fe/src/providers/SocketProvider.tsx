import { SocketContext } from "@/contexts/SocketContext";
import { useState, type FC, type ReactNode } from "react";
import type { Socket } from "socket.io-client";

interface Props {
    children: ReactNode;
}

export const SocketProvider: FC<Props> = ({ children }) => {
    const [username, setUsername] = useState<string>("");
    const [socket, setSocket] = useState<Socket | null>(null);

    return (
        <SocketContext.Provider
            value={{ socket, setSocket, username, setUsername }}
        >
            {children}
        </SocketContext.Provider>
    );
};
