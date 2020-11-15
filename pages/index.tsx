import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

import SectionOne from './sections/one'
import SectionTwo from './sections/two'
import SectionThree from './sections/three'
import SectionFour from './sections/four'
import SectionFive from './sections/five'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Navbar dark expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#section-one"><i>PT.</i> 01</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-two"><i>PT.</i> 02</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-three"><i>PT.</i> 03</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-four"><i>PT.</i> 04</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#section-five"><i>PT.</i> 05</NavLink>
            </NavItem>
          </Nav>
          </Collapse>
          <NavbarBrand href="/"><img src="img/logo.png" /></NavbarBrand>
        </Navbar>
        <SectionOne />
        {/* <SectionTwo /> */}
        {/* <SectionThree /> */}
        {/* <SectionFour /> */}
        {/* <SectionFive /> */}
      </main>
    </div>
  )
}