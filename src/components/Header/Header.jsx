import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from "../../assests/images/CodeNest.png";
import { Link } from "react-router-dom";


const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/About",
  },

  {
    display: "Courses",
    url: "/Courses",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
          <h2 className=" d-flex align-items-center gap-1">
  <img src={logo} width={250} height={200} alt="CodeNest logo" />
</h2>

          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
              <i className="ri-phone-line"></i>

               <h3 className="phone" >+37493470840</h3> 
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
