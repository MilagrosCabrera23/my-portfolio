import "./Projects.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";

const ProjectsComponent = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios
      .get("https://milagroscabrera-portfoliobackend.onrender.com/proyectos")
      .then((res) => setProyectos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="about-projects" id="proyecto">
      <Row className="row-projects">
        <Col className="text-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center title-projects"
            >
            Mis Proyectos
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1}}
              className="text-center subtitle-projects"
            >  A continuación te muestro algunos de los proyectos que he
                realizado en este último tiempo, usando distintas tecnologías.
            </motion.p>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {proyectos.map((proyecto) => (
          <Col key={proyecto.id}>
            <Card>
              <Card.Img
                variant="top"
                src={proyecto.imagen}
                className="img-proyectos"
                alt={proyecto.titulo}
              />
              <Card.Body>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2 }}
                  className="card-title titles-projects text-center"
                >
                  <Card.Title className="card-title titles-projects text-center">
                    {proyecto.titulo}
                  </Card.Title>
                  <Card.Text className="card-text text-projects text-center">
                    <strong>Categoría: </strong>
                    {proyecto.categoria}
                  </Card.Text>
                  <Card.Text className="card-text text-projects text-center">
                    {proyecto.descripcion}
                  </Card.Text>
                  <div className="d-flex button-group flex-wrap justify-content-center">
                    {proyecto.tecnologias.split(",").map((tec, i) => (
                      <span key={i} className="bg-azul-pastel">
                        {tec.trim()}
                      </span>
                    ))}
                    <a
                      href={proyecto.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-github d-flex align-items-center gap-2"
                    >
                      <FaGithub /> Ver en Github
                    </a>
                  </div>
                </motion.div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectsComponent;
