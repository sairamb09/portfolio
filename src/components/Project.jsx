import React from "react";
import { motion } from "framer-motion";
import "./Project.css";

const Project = ({ title, description, skills, features, link, image, imageClass }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="project-content">
                <h3>{title}</h3>
                <motion.div
                    className={`project-image ${imageClass}`}
                    whileHover={{ scale: 1.1 }} /* Scale up on hover */
                    transition={{ duration: 0.3 }}
                >
                    <img src={image} alt={title} />
                </motion.div>
                <div className="project-text">
                    <p><strong>Description:</strong></p>
                    <p>{description}</p>
                    <p><strong>Skills Demonstrated:</strong></p>
                    <ul>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                    <p><strong>Features:</strong></p>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    {link && (
                        <p><a href={link} target="_blank" rel="noopener noreferrer">View Project</a></p>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Project;