import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../components/Styles/main.css";
import "../index.css"

export default function ({ children }) {

    return (
        <div className="container background">
            <Navbar />        
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
}