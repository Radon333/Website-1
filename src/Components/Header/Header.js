import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import brandlogo from "../Images/gdsclogo.png";
import { motion } from "framer-motion";
function Header() {
  const [showNavRight, setShowNavRight] = useState(false);
  return (
    <MDBNavbar
      
      style={{
        fontFamily: "Open Sans, sans-serif",
        paddingTop: "3vh",
        paddingBottom: "3vh",
      }}
      expand="lg"
      light
      bgColor="light"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand
          style={{ paddingLeft: "5vw", fontSize: "2em" }}
          href="/"
        >
           <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0]}}
      >
          <img src={brandlogo} height="50" alt="gdsctcet" loading="lazy" />
          </motion.div>
          GDSC TCET
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav
            style={{
              fontFamily: "Open Sans, sans-serif",
              paddingRight: "5vw",
              fontSize: "1.5em",
            }}
            right
            fullWidth={false}
            className="mb-2 mb-lg-0"
          >
            <MDBNavbarItem style={{marginRight:"2vw"}}>
              <MDBNavbarLink to="/" href="/">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginRight:"2vw"}}>
              <MDBNavbarLink href="/events">Events</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{marginRight:"2vw"}}>
              <MDBNavbarLink href="team">Team</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Header;
