import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";


const Testimonials = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              {/* slider removed */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
