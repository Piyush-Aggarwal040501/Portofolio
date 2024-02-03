import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Piyush Aggarwal </strong>
              </h1>

              <div style={{ padding: "20px 0px", textAlign: "left" }}>
                <Type />
              </div>
              <h5 style={{ padding: "20px 0px", textAlign: "left" }}>
                Gmail : 
                <strong className="main-name">  piyush.aggarwal.040501@gmail.com</strong>
              </h5>
              <a href="https://drive.google.com/file/d/11CIuRFX49eoxt3Ewr2-cd7dv88IiJ_KU/view?usp=sharing" target="_blank" className="btn-resume">
                Resume
              </a>
            </Col>

            <Col md={5} style={{ padding: 20 }}>
              <img id="piyush-image"
                src="/piyush.jpg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
