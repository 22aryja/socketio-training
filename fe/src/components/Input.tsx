import { useContext, useEffect, useRef, useState, type FC } from "react";
import type Message from "./Message";
import { SocketContext } from "@/contexts/SocketContext";

type MessageProp = React.ComponentProps<typeof Message>;

interface Props {
    onSend: (message: MessageProp) => void;
}

const Input: FC<Props> = ({ onSend }) => {
    const [text, setText] = useState<string>("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { socket } = useContext(SocketContext);

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.code === "Enter") {
                handleClick();
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        if (!text) return;
        onSend({
            socketId: socket.id!,
            message: { content: text, time: new Date().toISOString() },
        });
        setText("");
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="w-full h-10 grid grid-cols-[9fr_1fr]">
            <input
                ref={inputRef}
                className="outline-none bg-gray-100 text-gray-800 px-4 py-2 placeholder:text-gray-800"
                value={text}
                onChange={handleChange}
                placeholder="Type something..."
            />
            <button
                className="bg-gray-400 cursor-pointer"
                onClick={handleClick}
            >
                Send
            </button>
        </div>
    );
};

export default Input;
