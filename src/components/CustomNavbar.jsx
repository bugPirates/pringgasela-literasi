import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        
        <Navbar.Header>
        <img src="/assets/logo3.png" class="img" />
          <Navbar.Brand>
            <Link to="/">Pringgasela Literasi</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            <i class="fa fa-fw fa-home"></i>Beranda
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
            <i class="fa fa-fw fa-adn"></i>Tentang
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
            <i class="fa fa-fw fa-newspaper-o"></i>Kegiatan
            </NavItem>
          </Nav>    
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
