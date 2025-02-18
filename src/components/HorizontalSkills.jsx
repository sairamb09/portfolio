import { memo, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import "./HorizontalSkills.css";

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

const HorizontalSkills = memo(() => {
    return (
        <motion.div
            className="horizontal-skills-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="horizontal-skills-list">
                <Suspense fallback={<div>Loading...</div>}>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaHtml5 /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaCss3Alt /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaBootstrap /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaAngular /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaJava /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaNodeJs /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaAws /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaDocker /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaPython /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaGit /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaJenkins /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaLinux /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaGithub /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiJavascript /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiTypescript /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiSpring /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiPostgresql /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiMysql /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiMongodb /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiKubernetes /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiRedis /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiElasticsearch /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiJira /></motion.span>
                    <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiSelenium /></motion.span>
                </Suspense>
            </div>
        </motion.div>
    );
});

HorizontalSkills.displayName = "HorizontalSkills";

export default HorizontalSkills;