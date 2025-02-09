import "./../styles/Home.css";
import "./../styles/Buttons.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";


function Home({ background, changeBackground }) {
    // Set the background as a CSS variable when the component mounts or updates
    useEffect(() => {
        document.documentElement.style.setProperty("--dynamic-bg", background);
    }, [background]);

    return (
        <>
            <section
                id="home"
                className="home animated-bg"
                onDoubleClick={changeBackground}
            >
                <div className="home-content">
                    <h1>Hi, I'm <span className="highlight">Aman Kumar Yadav</span> 👋</h1>
                    <h2>🚀 AI/ML Enthusiast | IoT & Robotics Innovator</h2>
                        <p>
                                I'm passionate about exploring AI, machine learning, and IoT to understand how technology can solve real-world problems.  
                                From experimenting with autonomous robots to building smart applications, I'm always eager to learn, tinker, and push my limits in new tech areas.  
                      </p>

                    <div className="buttons">
                        <Link to="/projects" className="btn">Projects</Link> 
                        <Link to="/about" className="btn">About Me</Link> 
                        <Link to="/contact" className="btn">Contact</Link>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Home;