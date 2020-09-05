import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./style.css";

const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md" sticky="top">
        <NavbarBrand className="logo" href="/">
          <img
            className="logo"
            src="https://www.vippng.com/png/full/229-2293338_spacex-logo-png-spacex.png"
            alt="logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "#fff", fontSize: "22px" }} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#fff", fontSize: "22px" }}
                href="/RocketDetail"
              >
                Rockets
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "#fff", fontSize: "22px" }}
                href="ShipDetail"
              >
                Ships
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
