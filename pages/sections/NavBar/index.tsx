import { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-scroll'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar dark fixed="top" expand="lg">
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="section-one" spy={true} smooth={true}>ASEAN Manufacturing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="section-two" spy={true} smooth={true}>Transformation</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="section-three" spy={true} smooth={true}>Indstry 4.0</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="section-four" spy={true} smooth={true}>Hitachi Lumada</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="section-five" spy={true} smooth={true}>Smart Manufacturing</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarToggler onClick={toggle} />
      <NavbarBrand href="/"><img src="img/logo.svg" height="30px" /></NavbarBrand>
    </Navbar>
  )
}