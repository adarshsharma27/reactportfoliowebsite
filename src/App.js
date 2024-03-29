import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollTop from "./components/SrollTop/ScrollTop";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import { useEffect } from "react";
import Resume from "./components/Resume/Resume";
import ReactGA from "react-ga4";

ReactGA.initialize("G-XFNV9FDXGC");
// Send pageview with a custom path
ReactGA.send({
  hitType: "pageview",
  page: `${window.location.href}`,
  title: "Adarsh Sharma{Frontendadarsh}",
});
function App() {
    useEffect(() => {
        Aos.init();
    });
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <ScrollTop />
            <Whatsapp />
            <Resume />
            <Footer />
        </>
    );
}

export default App;
