import "../styles/Projects.css";
import { useEffect } from "react";

const pythonProjectsData = [
    {
        "name": "Komodo",
        "description": "It is a Simple Python Virtual Environment Manager. It is a lightweight command-line tool to streamline creating and managing Python virtual environments on macOS. It is made in Python with libraries OS, Sys, and Subprocess with Zsh scripting."
    },
    {
        "name": "Bakery Management System",
        "description": "A terminal-based Bakery Management System where users can sign up, sign in, make orders, and track order details using Python with libraries OS, Sys, and Pandas."
    },
    {
        "name": "Tic Tac Toe Game",
        "description": "A GUI-based Tic Tac Toe game with Python and the Tkinter library. It has both single-player and multiplayer modes."
    }
];

const iotProjectsData = [
    {
        "name": "Line Follower Robot",
        "description": "A Line Follower Robot based on the PID algorithm and using Arduino Uno, a 5-channel Line sensor, a motor driver, etc."
    },
    {
        "name": "Smart Plant Watering System",
        "description": "An autonomous plant watering system based on weather conditions using Arduino, DHT sensor, Raindrop sensor, and humidity sensor."
    },
    {
        "name": "RC Car",
        "description": "A four-wheeled, remotely controlled car over WiFi via smartphone, which has two claws using Arduino, ESP8266 (WiFi module), and Motor Driver (L298N)."
    },
    {
        "name": "Robo Car",
        "description": "A four-wheeled Robo Car controlled by a joystick using Arduino and Motor Drivers (L298N)."
    }
];

const aimlProjectsData = [
    {
        "name": "Custom Object Detection",
        "description": "Created a custom object detection model using YOLOv8 to detect bottles in images or real-time camera feeds. Trained on a custom dataset and achieved moderate accuracy with potential for further optimization."
    },
    {
        "name": "Body Parts Detection",
        "description": "Made Full Body and Body Parts detection using a Pretrained Haar cascade Classifier and Python’s OpenCV Library."
    },
    {
        "name": "IRIS Dataset Analysis",
        "description": "Worked on the IRIS dataset to perform different preprocessing steps and understand K-Nearest Neighbors (KNN) classification."
    },
    {
        "name": "MNIST Handwritten Digits Classification",
        "description": "Worked on the MNIST dataset (a dataset of numeric handwritten digits) to understand and apply the SGD Classifier."
    }
];


const aiAgentsProjectsData = [
    {
        "name": "AI Agent - Tech Blog Writer",
        "description": "Built an AI agent that generates structured technical blog content using LLMs, with prompt engineering and style templates for enterprise documentation. Technologies: Python, Gemini APIs, Prompt Engineering."
    },
    {
        "name": "AI Agent - Crypto Trading Automation",
        "description": "Developed an AI agent for automating cryptocurrency trading workflows, currently tested via paper trading. Focused on API integration, modular design, and real-time decision support. Technologies: Python, REST APIs, Gemini API."
    }
];





const Projects = ({ background, changeBackground }) => {
    // Set the background as a CSS variable when the component mounts or updates
    useEffect(() => {
        document.documentElement.style.setProperty("--dynamic-bg", background);
    }, [background]);

    return (
        <section id="projects" className="projects animated-bg" onDoubleClick={changeBackground}>
            <h2>My Projects</h2>

            {/* Python Projects */}
            <div className="python-projects">
                <h1>Python Projects</h1>
                <div className="projects-container">
                    {pythonProjectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IoT Projects */}
            <div className="iot-projects">
                <h1>IoT Projects</h1>
                <div className="projects-container">
                    {iotProjectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI & ML Projects */}
            <div className="aiml-projects">
                <h1>AI & ML Projects</h1>
                <div className="projects-container">
                    {aimlProjectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="ai-agents-projects">
                <h1>AI Agents Projects</h1>
                <div className="projects-container">
                    {aiAgentsProjectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
