import { useEffect, useRef, useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-scroll'

import styles from './styles/NavBar.module.scss'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  
  const [isScrolling, setIsScrolling] = useState(false)
  const navRef = useRef(null)
  navRef.current = isScrolling
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 700
      if (navRef.current !== show) {
        setIsScrolling(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <Navbar dark fixed="top" expand="lg" style={{backgroundColor: isScrolling ? '#1E3998' : 'transparent', transition: '.5s ease-out'}}>
      <NavbarToggler onClick={toggle} />
      <NavbarBrand className={styles['mobile']} href="/"><img src="svg/logo.svg" height="25px" /></NavbarBrand>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-one" spy={true} smooth={true}>
              <div>ASEAN</div>
              <div>Manufacturing</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-two" spy={true} smooth={true}>
              <div>Urgent</div>
              <div>Transformation</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-three" spy={true} smooth={true}>
              <div>Industry 4.0</div>
              <div>Challenges</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-four" spy={true} smooth={true}>
              <div>Hitachi's</div>
              <div>Lumada</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-five" spy={true} smooth={true}>
              <div>Smart</div>
              <div>Manufacturing</div>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <NavbarBrand className={styles['desktop']} href="/"><img src="svg/logo.svg" height="25px" /></NavbarBrand>
    </Navbar>
  )
}