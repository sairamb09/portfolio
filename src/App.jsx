import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaAngular, FaJava, FaNodeJs, FaAws, FaDocker, FaPython, FaGit, FaJenkins, FaLinux, FaGraduationCap } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiSpring, SiPostgresql, SiMysql, SiMongodb, SiKubernetes, SiRedis, SiElasticsearch, SiJira, SiSelenium } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import customerSupportImage from "./assets/customer-support.png";
import expenseTracker from "./assets/expense-tracker.png";
import { FaUserGraduate } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import taskManagementImage from "./assets/task-management.png";
import metroDataWarehouseImage from "./assets/metro-data-warehouse.png";
import './components/About.css';
import './components/Contact.css';
import './components/Project.css';
import "./globalStyles.css"; // Import the new global CSS file
const sections = [
    {
        id: "about",
        title: "About Me",
        content: <About />
    },
    {
        id: "education",
        title: "Education",
        content: (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2020 - 2022"
                    iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                    icon={<motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaUserGraduate size={30} />
                    </motion.div>}
                >
                    <h3 className="vertical-timeline-element-title">Master's in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bridgewater State University</h4>
                    <p>
                        <strong>Key Courses:</strong>
                        <ul>
                            <li>Software Development</li>
                            <li>Object-Oriented Programming</li>
                            <li>Web Technologies</li>
                            <li>Cybersecurity Fundamentals</li>
                            <li>3D Computer Animation</li>
                            <li>Operating Systems</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2018 - 2020"
                    iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                    icon={<motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaUserGraduate size={30} />
                    </motion.div>}
                >
                    <h3 className="vertical-timeline-element-title">Master's in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Massachusetts Boston</h4>
                    <p>
                        <strong>Key Courses:</strong>
                        <ul>
                            <li>Advanced Algorithms</li>
                            <li>Database Management Systems</li>
                            <li>Cloud Computing</li>
                            <li>Software Engineering</li>
                            <li>Artificial Intelligence</li>
                            <li>Computer Networks</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2014 - 2018"
                    iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                    icon={<motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaUserGraduate size={30} />
                    </motion.div>}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor's in Electronics & Communication Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">R.V.R. & J.C. College of Engineering</h4>
                    <p>
                        <strong>Key Courses:</strong>
                        <ul>
                            <li>Digital Signal Processing</li>
                            <li>Embedded Systems</li>
                            <li>Microcontrollers & Microprocessors</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Communication Systems</li>
                            <li>VLSI Design</li>
                            <li>Control Systems</li>
                            <li>Wireless Communication</li>
                            <li>Antennas & Wave Propagation</li>
                            <li>Analog & Digital Electronics</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    },
    {
        id: "projects",
        title: "Projects",
        content: (
            <div className="projects-container">
                <Project
                    title="Expense Tracker"
                    description="The Expense Tracker is a full-stack web app for managing personal finances. Built with Angular, Node.js, Express.js, and MySQL, it lets users track expenses, categorize spending, and visualize financial data with interactive charts. It offers a responsive UI, secure backend, and insightful analytics for better financial management."
                    skills={[
                        "Angular, TypeScript, RxJS, Charts.js, Figma, Node.js, Express.js, RESTful APIs, MySQL, Authentication, Security, CORS, HTTP, Data Visualization"
                    ]}
                    features={[
                        "Secure authentication, ticket creation & tracking, admin dashboard, email notifications, and a responsive UI.",
                    ]}
                    link="https://github.com/sairamb09/expense-tracker"
                    image={expenseTracker}
                    imageClass="expense-tracker-image"
                />
                <Project
                    title="Customer Support Ticket System"
                    description="The Customer Support Ticket System is a web application for managing customer queries efficiently. It enables users to create, track, and resolve support tickets with a seamless experience. Designed for reliability, it offers a user-friendly interface and a robust backend for streamlined support operations."
                    skills={[
                        "React, JavaScript, CSS, Node.js, Express.js, RESTful APIs, MongoDB, NoSQL, Authentication, Security, HTTP"
                    ]}
                    features={[
                        "Secure authentication, ticket management, admin dashboard, email notifications, and a responsive UI.",
                    ]}
                    link="https://github.com/sairamb09/Customer-Support-Ticket-System"
                    image={customerSupportImage}
                    imageClass="customer-support-image"
                />
                <Project
                    title="Task Management System"
                    description="A full-stack web application designed for efficient task and project management. Built with Angular, Node.js, Express.js, and MySQL, it enables users to create, assign, and track tasks with real-time updates. The system includes role-based access control, notifications, and an intuitive dashboard for improved productivity."
                    skills={[
                        "Angular, TypeScript, RxJS, Node.js, Express.js, MySQL, RESTful APIs, Authentication, Security, CORS, HTTP, WebSockets, Data Visualization, Figma"
                    ]}
                    features={[
                        "Secure Authentication,Task Creation & Tracking,Admin Dashboard,Real-time Updates,Email Notifications,Responsive UI"
                    ]}
                    link="https://github.com/sairamb09/Task-Management-System"
                    image={taskManagementImage}
                    imageClass="task-management-image"
                />
                <Project
                    title="Metro Data Warehouse"
                    description="A robust data warehousing solution for storing, processing, and analyzing metro transit data. Built with Python, SQL, ETL pipelines, and cloud technologies, it ensures efficient data ingestion, transformation, and reporting for actionable insights. The system integrates real-time and historical data to support decision-making."
                    skills={[
                        "Python, SQL, ETL Pipelines, Data Warehousing, Cloud Computing, Apache Airflow, Snowflake/Redshift, BigQuery, Data Modeling, Data Transformation, RESTful APIs, Security, Performance Optimization"
                    ]}
                    features={[
                        "Data Ingestion & Processing,Scalable Storage,Data Transformation & Cleansing,Advanced Analytics & Reporting,Real-time & Historical Data Processing,Role-based Access Control"
                    ]}
                    link="https://github.com/sairamb09/Data_Warehouse"
                    image={metroDataWarehouseImage}
                    imageClass="metro-data-warehouse-image"
                />
                {/* Add more Project components as needed */}
            </div>
        )
    },
    {
        id: "experience",
        title: "Experience",
        content: (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Fidelity Investments, MA | Software Engineer</h3>
                    <p>Role: Developed scalable backend systems, optimized databases, built responsive UIs, and enhanced system performance. Collaborated in Agile teams to deliver projects on time.</p>
                    <p>Skills: Java, Spring Boot, Hibernate, PostgreSQL, Apache Kafka, React, ASP, AWS Lambda, Serverless, CI/CD, Agile, Performance Optimization.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="Jun 2020 - Aug 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Wipro | Software Developer</h3>
                    <p>Role: Enhanced matchmaking algorithms, secured API access, and implemented microservices for better scalability. Improved user experience with efficient exception handling, API versioning, and responsive UI design. Streamlined development with Java 8 features, React.js, and CI/CD automation.</p>
                    <p>Skills: Java, Spring Boot, Microservices, OAuth2, PostgreSQL, React.js, API Versioning, CI/CD (Jenkins), Python, Algorithm Optimization, Responsive UI Design.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="May 2019 - Aug 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Exposys Data Labs | IoT Developer Intern</h3>
                    <p>Role: As an <strong>IoT Developer Intern</strong>, I worked on integrating sensors with microcontrollers, enabling real-time data communication, and troubleshooting hardware/software issues. I gained hands-on experience in IoT architecture, cloud connectivity, and embedded systems development.</p>
                    <p>Skills: IoT development, sensor integration, embedded systems, data communication, cloud connectivity, problem-solving, debugging, and hardware-software interfacing.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    },
    {
        id: "skills",
        title: "Skills",
        content: (
            <div className="skills-section">
                <div className="skills-category">
                    <h3>Front-End Technologies:</h3>
                    <div className="skills-list">
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaHtml5 /> HTML</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaCss3Alt /> CSS</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaBootstrap /> Bootstrap</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /> UI Material</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /> SASS</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiJavascript /> JavaScript</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiTypescript /> Typescript</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiJavascript /> ES6</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /> React JS</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /> Redux</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /> React Hooks</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaAngular /> Angular</motion.span>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Back-End Technologies:</h3>
                    <div className="skills-list">
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaJava /> Java</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>REST API</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Microservices</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiSpring /> Spring Boot</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiSpring /> Spring MVC</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiSpring /> Spring Data JPA</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Hibernate ORM</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaNodeJs /> Node JS</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaNodeJs /> Express JS</motion.span>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Cloud and Databases:</h3>
                    <div className="skills-list">
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaAws /> AWS S3</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>CloudWatch</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaDocker /> Docker</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiKubernetes /> Kubernetes</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>SQL</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiMongodb /> MongoDB (NoSQL)</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiPostgresql /> PostgreSQL</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiMysql /> MySQL</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>RDBMS</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Cassandra</motion.span>
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Other Tools/Skills:</h3>
                    <div className="skills-list">
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaPython /> Python</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Scala</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiRedis /> Redis</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiElasticsearch /> Elasticsearch</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaJenkins /> Jenkins</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Gradle</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Code Ship</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaGithub /> GitHub</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Bitbucket</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaGit /> Git</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>JUnit</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Mockito</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>JMeter</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Apache Tomcat</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>React Testing Library</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Jest</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiSelenium /> Selenium</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><SiJira /> Jira</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Scrum</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>NetBeans</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaReact /> IntelliJ IDEA</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}>Eclipse</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaLinux /> Windows</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaLinux /> UNIX</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaLinux /> LINUX</motion.span>
                        <motion.span className="skill-item" whileHover={{ scale: 1.2 }}><FaLinux /> Mac OS</motion.span>
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "contact",
        title: "Contact",
        content: <Contact />
    },
];


const App = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.classList.toggle('light-theme', !isDarkTheme);
        document.body.classList.toggle('dark-theme', isDarkTheme);
    };

    useEffect(() => {
        document.body.classList.toggle('light-theme', !isDarkTheme);
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-left">
                    {sections.map((section) => (
                        <a key={section.id} href={`#${section.id}`} className="nav-link">
                            {section.id === "education" ? <FaUserGraduate size={20} /> : null}
                            {section.title}
                        </a>
                    ))}
                </div>
                <div className="navbar-right">
                    <button className="theme-toggle-button" onClick={toggleTheme}>
                        {isDarkTheme ? <FaSun size={20} /> : <FaMoon size={20} />}
                    </button>
                    <a href="https://linkedin.com/in/sairambandarupalli" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/sairamb09" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                </div>
            </nav>

            {sections.map((section) => (
                <motion.section
                    key={section.id}
                    id={section.id}
                    className="section"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>{section.title}</h2>
                    {section.content}
                </motion.section>
            ))}
        </div>
    );
};

export default App;