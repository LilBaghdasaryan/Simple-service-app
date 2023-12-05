import { PurpleBallIcon, RedBallIcon } from "../components/Assets/icons";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/Styles/main.css";
import "../index.css"

export default function ({ children }) {

    return (
        <div className="container background">
            <div className="conteiner-top-effect"></div>
            <div className="conteiner-left-effect"></div>
            <div className="red-ball">
                <RedBallIcon />
            </div>
            <div className="red-ball-small">
                <RedBallIcon />
            </div>
            <div className="purple-ball">
                <PurpleBallIcon />
            </div>
            <Navbar />        
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}