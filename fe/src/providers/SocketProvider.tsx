import { SocketContext, socketContextValues } from "@/contexts/SocketContext";
import { useState, type FC, type ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const SocketProvider: FC<Props> = ({ children }) => {
    const [username, setUsername] = useState<string>("");

    return (
        <SocketContext.Provider
            value={{ ...socketContextValues, username, setUsername }}
        >
            {children}
        </SocketContext.Provider>
    );
};
