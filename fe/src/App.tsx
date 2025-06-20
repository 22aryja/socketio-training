import ChatApplication from "./components/ChatApplication";
import { SocketProvider } from "./providers/SocketProvider";

const App = () => {
    return (
        <SocketProvider>
            <ChatApplication />
        </SocketProvider>
    );
};

export default App;
