import React, { useState, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ReactLenis } from 'lenis/react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/pages/home/Home';
import Footer from './Components/General/Footer';
import Notfound from './Components/General/Notfound';
import './css/style.css';
import TrenFinance from './Components/pages/Usecases/TrenFinance';
import Hetrix from './Components/pages/Usecases/Hetrix';
import Venom from './Components/pages/Usecases/Venom';
import Zume from './Components/pages/Usecases/Zume';
import Privacy from './Components/pages/Privacy';
import ScrollToTop from './Components/General/ScrollToTop';
import ScrollbarColorHOC from './Components/General/ScrollbarColorHOC';
import GraphicDesign from './Components/pages/blogs/GraphicDesign';
import './i18n'; // Import your i18n configuration

const App = () => {
    const lenisOptions = {
        lerp: 0.1,
        duration: 1,
        smoothTouch: false,
        smooth: true,
    };

    const [isHovered, setIsHovered] = useState(false);
    const xTo = useRef();
    const yTo = useRef();
    const app = useRef();

    const { contextSafe } = useGSAP(() => {
        xTo.current = gsap.quickTo(".flair", "x", { duration: 0.1, ease: "power3" });
        yTo.current = gsap.quickTo(".flair", "y", { duration: 0.1, ease: "power3" });
    }, { scope: app });

    const moveShape = contextSafe((e) => {
        if (window.innerWidth > 991) {
            xTo.current(e.clientX);
            yTo.current(e.clientY);
        }
    });

    return (
        <ReactLenis root options={lenisOptions}>
            <div className="App" ref={app} onMouseMove={moveShape}>
                <HashRouter>
                    <ScrollbarColorHOC>
                        <ScrollToTop />
                        <div className={isHovered ? "flair active" : "flair"}>
                            <span>View <br />project</span>
                        </div>
                        <Routes>
                            <Route element={<Home isHovered={isHovered} setIsHovered={setIsHovered} />} path="/" />
                            <Route element={<Privacy />} path="/privacy" />
                            <Route element={<TrenFinance />} path="/trenfinance" />
                            <Route element={<Hetrix />} path="/hetrix" />
                            <Route element={<Venom />} path="/venom" />
                            <Route element={<Zume />} path="/zume" />
                            <Route element={<GraphicDesign />} path="/blogs/Graphic Design" />
                            <Route path="*" element={<Notfound />} />
                        </Routes>
                        <Footer />
                    </ScrollbarColorHOC>
                </HashRouter>
            </div>
        </ReactLenis>
    );
};

export default App;
