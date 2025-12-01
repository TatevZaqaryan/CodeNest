import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/teacher.jpeg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
              Բարի գալուստ<br/>     <h1 color="#38b6ff">C💡deNest</h1>
              </h2>
              <p className="mb-5">
              CodeNest-ում մենք հավատում ենք, որ յուրաքանչյուր երեխա կարող է ուսումնասիրել կոդավորման և խաղերի աշխարհը: Ահա թե ինչու մեր բոլոր ծրագրերը առցանց են
             </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
