import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Selamat Datang di Website official Pringgasela Literasi</h2>
          <h3>Memberikan Wadah Untuk Berkreasi!</h3>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/hafis2.jpg" circle className="profile-pic"/>
            <h3>Hafis</h3>
            <h4>Ketua</h4>
            <p>"Tersenyumlah, Tuhanpun Jatuh Cinta"</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/capet2.jpg" circle className="profile-pic"/>
            <h3>Ardi</h3>
            <h4>Sekretaris</h4>
            <p>"Sekali bendera berkibar hentikan ratapan dan tangisan"</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pia.jpg" circle className="profile-pic"/>
            <h3>Hulpia</h3>
            <h4>Pengelola</h4>
            <p>"Aku akan menjadi Raja Bajak laut!"</p>
          </Col>
        </Row>
        {/* 
            Website ini di buat dengan keihlasan di hati saya, semoga bermanfaat bagi kalian semua
            Project KP 2020, Universitas Hamzanwadi Fakultas Tekhnik
            Created by: Gondes
            */}  
      </Grid>
    )
  }
}
