import { SocketContext } from "@/contexts/SocketContext";
import { memo, useContext, type FC } from "react";
import Avatar from "./Avatar";
import type { ReceivedMessage } from "@/types/common";

const Message: FC<ReceivedMessage> = memo(({ socketId, username, message, time }) => {
    const { socket } = useContext(SocketContext);

    const extractTime = (time: string): string => {
        return new Date(time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const fromSystem: boolean = socketId === "system";

    const fromMe: boolean = socketId === socket?.id;

    const applyClasses = (): { forSection: string; forDiv: string } => {
        if (fromSystem) {
            return {
                forSection: "justify-center",
                forDiv: "w-full flex flex-col items-center px-8",
            };
        } else if (fromMe) {
            return {
                forSection: "justify-end",
                forDiv: "flex flex-row-reverse items-center gap-2 pr-4 pl-8",
            };
        } else {
            return {
                forSection: "justify-start",
                forDiv: "flex items-center gap-2 pr-8 pl-4",
            };
        }
    };

    return (
        <section className={`flex w-full ${applyClasses().forSection}`}>
            <div
                className={`bg-[#222] py-2 rounded-full w-fit ${
                    applyClasses().forDiv
                }`}
            >
                {!fromSystem && (
                    <Avatar socketId={socketId} username={username} />
                )}
                <div>
                    {!fromSystem && (
                        <h1 className="font-semibold">{username}:</h1>
                    )}
                    <h2 className="flex">{message}</h2>
                    <h3 className="text-[#ffffff62] text-sm">
                        at {extractTime(time)}
                    </h3>
                </div>
            </div>
        </section>
    );
});

export default Message;
