import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "./Input";
import Message from "./Message";
import { SocketContext } from "@/contexts/SocketContext";

type MessageProp = React.ComponentProps<typeof Message>;

const Chat = () => {
    const [messages, setMessages] = useState<MessageProp[]>([]);
    const anchor = useRef<HTMLDivElement | null>(null);
    const { socket, username } = useContext(SocketContext);

    useEffect(() => {
        if (anchor.current) {
            anchor.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    useEffect(() => {
        const handleConnect = () => {
            socket?.emit("join", username);
        };

        const handleReceive = ({
            socketId,
            username,
            message,
        }: MessageProp) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { socketId, username, message },
            ]);
        };

        socket?.once("connect", handleConnect);
        socket?.on("receive", handleReceive);

        return () => {
            socket?.off("receive", handleReceive);
        };
    }, [socket]);

    const handleSend = (newMessage: MessageProp) => {
        socket?.emit("send", newMessage);
    };

    return (
        <section className="border border-solid border-gray-200 w-3/4 h-3/4 rounded-md bg-[#22222279]">
            <div className="w-full h-full flex flex-col justify-between">
                <div className="overflow-auto h-full w-full p-4 flex flex-col gap-4">
                    {messages.map((props: MessageProp, index: number) => (
                        <Message key={index} {...props} />
                    ))}
                    <div ref={anchor} />
                </div>
                <Input onSend={handleSend} />
            </div>
        </section>
    );
};

export default Chat;
