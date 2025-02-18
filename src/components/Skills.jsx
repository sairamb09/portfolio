import { memo, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import HorizontalSkills from "./HorizontalSkills";

const FaHtml5 = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaHtml5 })));
const FaCss3Alt = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaCss3Alt })));
const FaBootstrap = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaBootstrap })));
const FaReact = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaReact })));
const FaAngular = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaAngular })));
const FaJava = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaJava })));
const FaNodeJs = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaNodeJs })));
const FaAws = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaAws })));
const FaDocker = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaDocker })));
const FaPython = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaPython })));
const FaGit = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaGit })));
const FaJenkins = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaJenkins })));
const FaLinux = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaLinux })));
const FaGithub = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaGithub })));
const SiJavascript = lazy(() => import("react-icons/si").then(module => ({ default: module.SiJavascript })));
const SiTypescript = lazy(() => import("react-icons/si").then(module => ({ default: module.SiTypescript })));
const SiSpring = lazy(() => import("react-icons/si").then(module => ({ default: module.SiSpring })));
const SiPostgresql = lazy(() => import("react-icons/si").then(module => ({ default: module.SiPostgresql })));
const SiMysql = lazy(() => import("react-icons/si").then(module => ({ default: module.SiMysql })));
const SiMongodb = lazy(() => import("react-icons/si").then(module => ({ default: module.SiMongodb })));
const SiKubernetes = lazy(() => import("react-icons/si").then(module => ({ default: module.SiKubernetes })));
const SiRedis = lazy(() => import("react-icons/si").then(module => ({ default: module.SiRedis })));
const SiElasticsearch = lazy(() => import("react-icons/si").then(module => ({ default: module.SiElasticsearch })));
const SiJira = lazy(() => import("react-icons/si").then(module => ({ default: module.SiJira })));
const SiSelenium = lazy(() => import("react-icons/si").then(module => ({ default: module.SiSelenium })));

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Skills = memo(() => {
    return (
        <motion.div
            className="skills-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="skills-category">
                <h3>Front-End Technologies:</h3>
                <motion.div className="skills-list" variants={containerVariants}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaHtml5 /> HTML</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaCss3Alt /> CSS</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaBootstrap /> Bootstrap</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaReact /> UI Material</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaReact /> SASS</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiJavascript /> JavaScript</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiTypescript /> Typescript</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiJavascript /> ES6</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaReact /> React JS</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaReact /> Redux</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaReact /> React Hooks</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaAngular /> Angular</motion.span>
                    </Suspense>
                </motion.div>
            </div>
            <div className="skills-category">
                <h3>Back-End Technologies:</h3>
                <motion.div className="skills-list" variants={containerVariants}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaJava /> Java</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>REST API</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Microservices</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiSpring /> Spring Boot</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiSpring /> Spring MVC</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiSpring /> Spring Data JPA</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Hibernate ORM</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaNodeJs /> Node JS</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaNodeJs /> Express JS</motion.span>
                    </Suspense>
                </motion.div>
            </div>
            <div className="skills-category">
                <h3>Cloud and Databases:</h3>
                <motion.div className="skills-list" variants={containerVariants}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaAws /> AWS S3</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>CloudWatch</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaDocker /> Docker</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiKubernetes /> Kubernetes</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>SQL</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiMongodb /> MongoDB (NoSQL)</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiPostgresql /> PostgreSQL</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiMysql /> MySQL</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>RDBMS</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Cassandra</motion.span>
                    </Suspense>
                </motion.div>
            </div>
            <div className="skills-category">
                <h3>Other Tools/Skills:</h3>
                <motion.div className="skills-list" variants={containerVariants}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaPython /> Python</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Scala</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiRedis /> Redis</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiElasticsearch /> Elasticsearch</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaJenkins /> Jenkins</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Gradle</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Code Ship</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaGithub /> GitHub</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Bitbucket</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaGit /> Git</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>JUnit</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Mockito</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>JMeter</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Apache Tomcat</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>React Testing Library</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Jest</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiSelenium /> Selenium</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><SiJira /> Jira</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Scrum</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>NetBeans</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaReact /> IntelliJ IDEA</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}>Eclipse</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaLinux /> Windows</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaLinux /> UNIX</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaLinux /> LINUX</motion.span>
                        <motion.span className="skill-item" variants={itemVariants} whileHover={{ scale: 1.2 }}><FaLinux /> Mac OS</motion.span>
                    </Suspense>
                </motion.div>
            </div>
            <HorizontalSkills />
        </motion.div>
    );
});

Skills.displayName = "Skills";

export default Skills;