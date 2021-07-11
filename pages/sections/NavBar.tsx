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
    // <Navbar dark fixed="top" expand="lg" style={{backgroundColor: isScrolling ? '#1E3998' : 'transparent', transition: '.5s ease-out'}}>
    <Navbar dark fixed="top" expand="lg" style={{backgroundColor: '#1E3998'}}>
      <NavbarToggler onClick={toggle} className="mx-auto"/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className="mx-auto">
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-one" spy={true} smooth={true}>
              <div>Sản xuất của khu vực</div>
              <div>ASEAN</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-two" spy={true} smooth={true}>
              <div>Chuyển đổi</div>
              <div>cấp thiết</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-three" spy={true} smooth={true}>
              <div>Những thách thức của nền Công</div>
              <div> nghiệp 4.0</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-four" spy={true} smooth={true}>
              <div>Nền tảng Lumada</div>
              <div> của Hitachi</div>
            </NavLink>
          </NavItem>
          <NavItem className={styles['quick-link']}>
            <NavLink tag={Link} to="section-five" spy={true} smooth={true}>
              <div>Sản xuất</div>
              <div>thông minh</div>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}