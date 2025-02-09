import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./components/home";
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";


function App() {
    useEffect(() => {
        const preventScroll = () => {
            document.documentElement.style.overflow = "hidden"; // Prevents scrolling
        };
        preventScroll();
    }, []);

    const gradients = [
        "linear-gradient(135deg, #000000, #1c1c1c, #383838, #b0b0b0, #ffffff)", // Minimalist Gradient
        "linear-gradient(135deg, #000000, #222222, #444444, #666666, #888888, #aaaaaa, #ffffff)", // Dark Monochrome Gradient
        "linear-gradient(135deg, #000000, #181818, #3a3a3a, #5c5c5c, #9e9e9e, #d5d5d5, #ffffff)", // Elegant BW Gradient
        "linear-gradient(135deg, #ff758c, #ff7eb3, #ff9966, #ff5e62)", // Light Pink Gradient
        "linear-gradient(135deg, #66e6d5, #53bfe6, #7c60e4, #e60101, #ca0202)", // Dark Gradient
        "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #ffdde1, #fc6076, #ff9a9e)", // Sunset Glow Gradient
        "linear-gradient(135deg, #141e30, #243b55, #3a6073, #16222a, #1a2980)", // Neon Blue Gradient
        "linear-gradient(135deg, #ff00ff, #ff1493, #ff4500, #ff8c00, #ffcc00)", // Cyberpunk Glow Gradient
        "linear-gradient(135deg, #004e92, #00c9ff, #007991, #78ffd6)", // Forest Green Gradient
        "linear-gradient(135deg, #ffb347, #ffcc33, #ffd700, #ffdb58)" // Golden Hour Gradient
    ];
    
    const [background, setBackground] = useState(gradients[0]);

    // Function to change background randomly on double click
    const changeBackground = () => {
        const randomIndex = Math.floor(Math.random() * gradients.length);
        setBackground(gradients[randomIndex]);
    };
   

    return (
        <Router>
            <div 
                className="app-container"
               style={{ background: background}}  
                onDoubleClick={changeBackground} // Change background on double-click anywhere
            >
                 <Routes>
                    <Route path="/" element={<Home background={background} changeBackground={changeBackground} />} /> 
                    <Route path="/about" element={<AboutMe background={background} changeBackground={changeBackground} />} />
                    <Route path="/projects" element={<Projects background={background} changeBackground={changeBackground} />} />
                    <Route path="/contact" element={<Contact background={background} changeBackground={changeBackground} />} />
                 </Routes>
            </div>
        </Router>
    );
}

export default App;





