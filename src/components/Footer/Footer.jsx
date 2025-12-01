import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assests/images/CodeNest.png";
import { Link } from "react-router-dom";


import "./footer.css";

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "/About",
  },

  {
    display: "Courses",
    url: "/Courses",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="mb-4">
            {/* <h2 className=" d-flex align-items-center gap-1"> */}
              {/* <i class="ri-pantone-line"></i> Learners. */}
           

            <div className="follows">
            <img src={logo} width={150} height={150} alt="CodeNest logo" />
            <br/>
              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://www.instagram.com/codenest.engineering/">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>

              <span>
                {" "}
                <a href="facebook.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  {" "}
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="fw-bold">Get in Touch</h6>

            {/* <p>Address: Sebastia 3</p> */}
            <p> Phone: +37493470840 </p>
            <p>Email:codenest.enginering@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
