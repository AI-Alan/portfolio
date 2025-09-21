import "../styles/AboutMe.css";
import "../styles/Buttons.css";
import { useEffect } from "react";


const AboutMe = ({ background, changeBackground }) => {
    // Set the background as a CSS variable when the component mounts or updates
        useEffect(() => {
            document.documentElement.style.setProperty("--dynamic-bg", background);
        }, [background]);
    
    return (
        <section id="about" className="about animated-bg" onDoubleClick={changeBackground}>
           
       <div className="about-content">
          <img src="./aman_rb.jpg" alt="Aman Kumar Yadav" className="profile-img" />

           <h2>About Me</h2>

        <p>
            I’m <strong>Aman Kumar Yadav</strong>, a <strong>3rd-year BTech student</strong> at <strong>NIT Srinagar</strong>,  
            specializing in Information Technology. My passion lies in <strong>AI, Machine Learning, IoT, and Robotics</strong>,  
            where I explore cutting-edge technologies to solve real-world problems.
        </p>

        <p>
            Currently, I’m an <strong>ML Intern at NIT Kurukshetra</strong>, working on <strong>Deepfake Detection</strong>  
            with state-of-the-art AI models. I have hands-on experience in <strong>Computer Vision</strong>, including  
            <strong>YOLO and Haar cascade classifiers</strong> for object detection.
        </p>

        <p>
            At <strong>NIT Srinagar</strong>, I’m an active member of the <strong>IoT Lab</strong> and have participated  
            in multiple AI & IoT projects. I also led the <strong>‘Like Follower of Robot’</strong> event at <strong>Techvaganza</strong>,  
            where participants developed autonomous robots navigating dynamic paths.
        </p>

        <p>
            Apart from AI & Robotics, I enjoy working on <strong>Web Development</strong>.  
            Currently, I’m building a <strong>file-sharing web app</strong> using <strong>React & Node.js</strong>.  
            I believe in continuous learning and always look forward to new challenges!
        </p>

        <div className="resume-container">
            <a href="https://www.overleaf.com/download/project/68ccfbb09af7a54cc17291e2/build/1996cc0ccea-7a81a7607867d516/output/output.pdf?compileGroup=standard&clsiserverid=clsi-reg-n2d-c-f-hvcc&enable_pdf_caching=true&popupDownload=true" 
               className="btn" 
               download>
               📄 Download My Resume
            </a>
        </div>
    </div>




        </section>
    );
};

export default AboutMe;
