import { SocketContext } from "@/contexts/SocketContext";
import type { ResponseMessage } from "@/types/common";
import { memo, useContext, type CSSProperties, type FC } from "react";

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

    const fromSystem: boolean = socketId === "system";

    const applyWrapperClasses = (): string => {
        if (fromSystem) {
            return "justify-center";
        } else if (socketId === socket?.id) {
            return "justify-end";
        } else {
            return "justify-start";
        }
    };

    const applyMessageClasses = (): string => {
        if (fromSystem) {
            return "w-full flex flex-col items-center";
        } else {
            return "";
        }
    };

    return (
        <section className={`flex w-full ${applyWrapperClasses()}`}>
            <div
                className={`bg-[#222] px-8 py-2 rounded-full w-fit ${applyMessageClasses()}`}
            >
                {!fromSystem && <h1 className="font-semibold">{username}:</h1>}
                <h2 className="flex">{message.content}</h2>
                <h3 className="text-[#ffffff62] text-sm">
                    at {extractTime(message.time)}
                </h3>
            </div>
        </section>
    );
});

export default Message;
