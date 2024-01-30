import "../styles/global.css";

// Internal Import
import { ChatAppProvider } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
    <div>
        <ChatAppProvider>
            <NavBar />
            <Component {...pageProps} />
        </ChatAppProvider>
        
    </div>
);

export default MyApp;
