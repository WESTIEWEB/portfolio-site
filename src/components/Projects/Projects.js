import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import withLoom from "../../Assets/Projects/withLoom.png";
import swift from "../../Assets/Projects/swift-rider.png";
// import suicide from "../../Assets/Projects/suicide.png";
import teamManager from "../../Assets/Projects/teamManager.png";

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
              imgPath={swift}
              isBlog={false}
              title="Swift Rider"
              description="A dispach app, that allow users send items within a selected geographical location"
              ghLink="https://github.com/WESTIEWEB/SWIFT-RIDE-FRONTEND.git"
              demoLink="https://swift-rider.netlify.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamManager}
              isBlog={false}
              title="Employee central"
              description="a simple website that manages employees into groups/departments"
              ghLink="https://github.com/WESTIEWEB/EmployeeTeamManager"
              demoLink="https://excellenttgroup.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={withLoom}
              isBlog={false}
              title="withLoom"
              description="a simple site that fetches trending coins from the coinmarketcap api and displays them"
              ghLink="https://github.com/WESTIEWEB/withLoom"
              demoLink="https://withloom.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
