import { SocketContext } from "@/contexts/SocketContext";
import { Modal } from "@/ui/Modal";
import { useContext, useId, useState, type FC } from "react";
import { io } from "socket.io-client";

interface Props {
    onClick: () => void;
}

export const GreetingModal: FC<Props> = ({ onClick }) => {
    const id: string = useId();
    const [name, setName] = useState<string>("");
    const { setUsername, setSocket } = useContext(SocketContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleClick = () => {
        onClick();
        setUsername(name);
        const socket = io("http://localhost:3000");
        setSocket(socket);
    };

    return (
        <Modal>
            <div className="grid grid-rows-3 gap-4">
                <label htmlFor={id} className="text-4xl">
                    Enter your name
                </label>
                <input
                    id={id}
                    className="border border-solid border-white rounded-sm px-4 py-2 text-xl outline-0"
                    onChange={handleChange}
                />

                <button
                    className="bg-white/10 rounded-sm transition-all hover:bg-white/25"
                    style={
                        name
                            ? {
                                  opacity: 1,
                                  pointerEvents: "all",
                                  cursor: "pointer",
                              }
                            : {
                                  opacity: 0,
                                  pointerEvents: "none",
                              }
                    }
                    onClick={handleClick}
                >
                    Enter
                </button>
            </div>
        </Modal>
    );
};
