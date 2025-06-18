import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import {
    FaPython,
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiDjango,
    SiBootstrap,
    SiAngular,
    SiSpring,
    SiUml,
    SiScrumalliance,
    SiMysql,
    SiPostgresql,
    SiFastapi,
} from "react-icons/si";
import { motion } from "framer-motion";

const SkillsComponent = () => {
    return (
        <Container className="skills-container" id="habilidades">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                <h2 className="title-skills text-center">Habilidades y Tecnologías</h2>
                <p className="subtitle-skills text-center">
                    Herramientas y tecnologías que utilizo para crear soluciones digitales
                </p>
            </motion.div>

            <Row className="g-3">
                {/* Lenguajes y Frameworks */}
                <Col md={6}>
                    <div className="tech-card p-3 shadow-sm rounded">
                        <h5 className="fw-bold text-success mb-2 text-center">
                            Lenguajes y Frameworks
                        </h5>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <div className="tech-item">
                                <FaReact className="tech-icon-circle" />
                                <small className="tech-label">React.js</small>
                            </div>
                            <div className="tech-item">
                                <FaJsSquare className="tech-icon-circle" />
                                <small className="tech-label">JavaScript</small>
                            </div>
                            <div className="tech-item">
                                <SiAngular className="tech-icon-circle" />
                                <small className="tech-label">Angular</small>
                            </div>
                            <div className="tech-item">
                                <FaHtml5 className="tech-icon-circle" />
                                <small className="tech-label">HTML</small>
                            </div>
                            <div className="tech-item">
                                <FaCss3Alt className="tech-icon-circle" />
                                <small className="tech-label">CSS</small>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Bases de Datos y Backend */}
                <Col md={6}>
                    <div className="tech-card p-3 shadow-sm rounded">
                        <h5 className="fw-bold text-warning mb-2 text-center">
                            Bases de Datos y Backend
                        </h5>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <div className="tech-item">
                                <SiMysql className="tech-icon-circle" />
                                <small className="tech-label">MySQL</small>
                            </div>
                            <div className="tech-item">
                                <SiPostgresql className="tech-icon-circle" />
                                <small className="tech-label">PostgreSQL</small>
                            </div>
                            <div className="tech-item">
                                <FaPython className="tech-icon-circle" />
                                <small className="tech-label">Python</small>
                            </div>
                            <div className="tech-item">
                                <SiDjango className="tech-icon-circle" />
                                <small className="tech-label">Django</small>
                            </div>
                            <div className="tech-item">
                                <SiFastapi className="tech-icon-circle" />
                                <small className="tech-label">FastAPI</small>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Herramientas */}
                <Col md={6}>
                    <div className="tech-card p-3 shadow-sm rounded">
                        <h5 className="fw-bold text-danger mb-2 text-center">
                            Herramientas
                        </h5>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <div className="tech-item">
                                <FaGitAlt className="tech-icon-circle" />
                                <small className="tech-label">Git</small>
                            </div>
                            <div className="tech-item">
                                <FaGithub className="tech-icon-circle" />
                                <small className="tech-label">GitHub</small>
                            </div>
                            <div className="tech-item">
                                <SiBootstrap className="tech-icon-circle" />
                                <small className="tech-label">Bootstrap</small>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* Arquitectura y Metodologías */}
                <Col md={6}>
                    <div className="tech-card p-3 shadow-sm rounded">
                        <h5 className="fw-bold text-primary text-center">
                            Arquitectura y Metodologías
                        </h5>
                        <div className="d-flex flex-wrap gap-3 justify-content-center">
                            <div className="tech-item">
                                <SiSpring className="tech-icon-circle" />
                                <small className="tech-label">Patrones</small>
                            </div>
                            <div className="tech-item">
                                <SiUml className="tech-icon-circle" />
                                <small className="tech-label">UML</small>
                            </div>
                            <div className="tech-item">
                                <SiScrumalliance className="tech-icon-circle" />
                                <small className="tech-label">Scrum</small>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SkillsComponent; 