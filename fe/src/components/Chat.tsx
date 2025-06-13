import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import Message from "./Message";

type MessageProp = React.ComponentProps<typeof Message>;

const Chat = () => {
    const [messages, setMessages] = useState<MessageProp[]>([]);
    const anchor = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (anchor.current) {
            anchor.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = (newMessage: MessageProp) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
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
