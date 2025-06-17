import { SocketContext } from "@/contexts/SocketContext";
import type { ResponseMessage } from "@/types/common";
import { memo, useContext, type FC } from "react";

interface Props {
    socketId: string;
    username: string;
    message: ResponseMessage;
}

const Message: FC<Props> = memo(({ socketId, username, message }) => {
    const { socket } = useContext(SocketContext);

    const extractTime = (time: string): string => {
        return new Date(time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const isMyMessage: boolean = socketId === socket.id;

    return (
        <section
            className="flex w-full"
            style={{
                justifyContent: isMyMessage ? "flex-end" : "flex-start",
            }}
        >
            <div className="bg-[#222] px-8 py-2 rounded-full w-fit">
                <h1 className="font-semibold">{username}:</h1>
                <h2 className="flex">{message.content}</h2>
                <h3 className="text-[#ffffff62] text-sm">
                    at {extractTime(message.time)}
                </h3>
            </div>
        </section>
    );
});

export default Message;
