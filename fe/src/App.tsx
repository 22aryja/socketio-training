import { useState } from "react";
import Chat from "./components/Chat";
import { GreetingModal } from "./modals/GreetingModal";
import { SocketProvider } from "./providers/SocketProvider";

const App = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleClick = () => {
        setIsOpen(false);
    };

    return (
        <SocketProvider>
            <main className="w-screen h-screen flex justify-center items-center">
                <Chat />
            </main>
            {isOpen && <GreetingModal onClick={handleClick} />}
        </SocketProvider>
    );
};

export default App;
