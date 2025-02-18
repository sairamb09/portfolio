import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import profileImage from "../assets/profile.png"; // Import the image

const About = () => {
    return (
        <motion.section
            id="about"
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="badges"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <motion.span
                    className="badge"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Software Developer
                </motion.span>
                <motion.span
                    className="badge"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Looking for new opportunities!
                </motion.span>
            </motion.div>

            <motion.img
                src={profileImage}
                alt="Profile"
                className="profile-image"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.p
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                A Software Developer with 4+ years of experience in building scalable applications, specializing in developing RESTful APIs, microservices, cloud-native solutions in Agile environments and modern UI frameworks like React, by maintaining a 95% on-time delivery rate.
            </motion.p>
            <motion.p
                className="description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                Demonstrated in deploying applications on AWS, leveraging Docker for containerization, and collaborating with cross-functional teams to deliver high-impact software solutions, ensuring seamless integration between front end and back end while sticking to industry best practices.
            </motion.p>
        </motion.section>
    );
};

export default About;