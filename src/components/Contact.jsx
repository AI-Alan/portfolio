import "../styles/Contact.css";
import { useEffect } from "react";

const Contact = ({ background, changeBackground }) => {
    // Set the background as a CSS variable when the component mounts or updates
        useEffect(() => {
            document.documentElement.style.setProperty("--dynamic-bg", background);
        }, [background]);
    
    return (
        <section id="contact" className="contact animated-bg"  onDoubleClick={changeBackground}>
          <div className="contact-content">
    <h2 className="contact-heading">Let's Connect!</h2>
    <p className="contact-text">
        Have a project idea, a question, or just want to chat about AI, ML, or IoT?
    </p>
    <p className="contact-text highlight">
        I'm always excited to connect and collaborate! 🚀
    </p>

    <div className="contact-links">
        <a href="mailto:amorphiouslattice@gmail.com" className="btn">
            📧 Email
        </a>
        <a href="https://www.linkedin.com/in/aman-kumar-yadav010" 
           target="_blank" rel="noopener noreferrer" className="btn">
            🔗 LinkedIn
        </a>
        <a href="https://github.com/AI-Alan/" 
           target="_blank" rel="noopener noreferrer" className="btn">
            💻 GitHub
        </a>
        <a href="tel:+916306894707" className="btn">
            📞 Call
        </a>
    </div>
</div>


        </section>
    );
};

export default Contact;


