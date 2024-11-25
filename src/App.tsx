import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { SelectedPage } from "./types";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import OurClasses from "./components/OurClasses";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

const App = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleTopOfPage = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) {
                setIsTopOfPage(false);
            }
        };

        window.addEventListener("scroll", handleTopOfPage);

        return () => {
            window.removeEventListener("scroll", handleTopOfPage);
        };
    }, []);
    return (
        <div className="bg-gray-20 app">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
            <Footer />
        </div>
    );
};

export default App;
