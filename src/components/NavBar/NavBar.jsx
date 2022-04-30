import { React, useEffect, useState } from "react";
import { logoLight, logoDark } from "../../assets/images/images-path";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./_NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import { MdExpandLess } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar() {

  const [ToggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navToggle = () => {
    ToggleMenu === false ? setToggleMenu(true) : setToggleMenu(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    })
  }, [])

  return (
    <>
      <Navbar className={`${scroll === true ? 'nav-scroll' : ''} py-4`}>
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo__wrapper">
              <img src={`${scroll === true ? logoDark : logoLight}`} alt="main-logo" className="img-fluid" />
            </div>
          </Navbar.Brand>

          <AiOutlineMenu className="nav-hamburger d-lg-none d-block" onClick={navToggle} />

          <Nav className={`ms-lg-auto ${ToggleMenu === true ? 'active' : ''}`}>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/">ABOUT</Nav.Link>
            <span className="drpd">
              <Nav.Link href="/">ROOMS &#38; SUITES
                <MdExpandLess className="menu__caret" />
              </Nav.Link>

              <ul className="dropdown__menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Rooms 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Rooms 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Rooms 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Rooms Details
                  </a>
                </li>
              </ul>
            </span>


            <Nav.Link href="/">RESTAURANT</Nav.Link>
            <Nav.Link href="/">SPA</Nav.Link>
            <Nav.Link href="/">GALLERY</Nav.Link>
            <span className="drpd">
              <Nav.Link href="/">
                NEWS
                <MdExpandLess className="menu__caret" />
              </Nav.Link>

              <ul className="dropdown__menu">
                <li>
                  <a className="dropdown-item" href="/">
                    News 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    News 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Single Post
                  </a>
                </li>
              </ul>
            </span>
            <Nav.Link href="/">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}
