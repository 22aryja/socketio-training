import { SocketContext } from "@/contexts/SocketContext";
import type { ResponseMessage } from "@/types/common";
import { memo, useContext, type FC } from "react";
import Avatar from "./Avatar";

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

    const fromMe: boolean = socketId === socket?.id;

    const applyWrapperClasses = (): string => {
        if (fromSystem) {
            return "justify-center";
        } else if (fromMe) {
            return "justify-end";
        } else {
            return "justify-start";
        }
    };

    const applyMessageClasses = (): string => {
        if (fromSystem) {
            return "w-full flex flex-col items-center px-8";
        } else if (fromMe) {
            return "flex flex-row-reverse items-center gap-2 pr-4 pl-8";
        } else {
            return "flex items-center gap-2 pr-8 pl-4";
        }
    };

    return (
        <section className={`flex w-full ${applyWrapperClasses()}`}>
            <div
                className={`bg-[#222] py-2 rounded-full w-fit ${applyMessageClasses()}`}
            >
                {!fromSystem && (
                    <Avatar socketId={socketId} username={username} />
                )}
                <div>
                    {!fromSystem && (
                        <h1 className="font-semibold">{username}:</h1>
                    )}
                    <h2 className="flex">{message.content}</h2>
                    <h3 className="text-[#ffffff62] text-sm">
                        at {extractTime(message.time)}
                    </h3>
                </div>
            </div>
        </section>
    );
});

export default Message;
