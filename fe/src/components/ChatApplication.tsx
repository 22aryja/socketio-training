import { useState } from "react";
import Chat from "./Chat";
import { GreetingModal } from "@/modals/GreetingModal";

export const ChatApplication = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <main className="w-screen h-screen flex justify-center items-center">
                <Chat />
            </main>
            {isOpen && <GreetingModal onClick={handleClick} />}
        </>
    );
};

export default ChatApplication;
