import { useState } from "react";
import "../styles/Navbar.css";  


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Aman Kumar Yadav</div>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                {/* <li><a href="#home">Home</a></li> */}
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <span className={isOpen ? "bar rotate1" : "bar"}></span>
                <span className={isOpen ? "bar hide" : "bar"}></span>
                <span className={isOpen ? "bar rotate2" : "bar"}></span>
            </div>
        </nav>
    );
};

export default Navbar;
