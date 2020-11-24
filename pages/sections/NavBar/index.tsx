import { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar dark fixed="top" expand="lg">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav navbar>
        <NavItem>
          <NavLink href="#section-one">ASEAN Manufacturing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#section-two">Transformation</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#section-three">Indstry 4.0</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#section-four">Hitachi Lumada</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#section-five">Smart Manufacturing</NavLink>
        </NavItem>
      </Nav>
      </Collapse>
      <NavbarBrand href="/"><img src="img/logo.png" /></NavbarBrand>
    </Navbar>
  )
}