import Chat from "./components/Chat";
import { SocketProvider } from "./providers/SocketProvider";

const App = () => {
    return (
        <SocketProvider>
            <main className="w-screen h-screen flex justify-center items-center">
                <Chat />
            </main>
        </SocketProvider>
    );
};

export default App;
