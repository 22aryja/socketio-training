import { SocketContext, socketContextValues } from "@/contexts/SocketContext";
import type { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const SocketProvider: FC<Props> = ({ children }) => {
    return (
        <SocketContext.Provider value={socketContextValues}>
            {children}
        </SocketContext.Provider>
    );
};
