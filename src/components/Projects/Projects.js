import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import store from "../../Assets/Projects/shopping-store.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="Shopping Store"
              description="A modern and responsive e-commerce website UI designed to showcase a clean and engaging online shopping experience. In project is attractive layouts, product displays, intuitive navigation, and responsive design principles, demonstrating frontend development skills and the ability to create visually appealing user interfaces."
              ghLink="https://github.com/vaghelaparth111/shoping-store.git"
              demoLink="https://vaghelaparth111.github.io/shoping-store/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
