import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/literasi2.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/h22.jpg" className="about-profile-pic" rounded />
            <h3>Abdul Hafiz</h3>
           <p>Visi & Misi Pringgasela Literasi</p>
              <p>
              Visi: Meningkatkan Literasi <br />
              Misi: Ngalapak buku dengan baca gratis <br />
              Memberikan wadah untuk bebas berkreasi, menulis, mewarnai, dan menggambar.<br />
              Meminjamkan buku secara gratis </p>
          </Col>
        </Grid>
      </div>
    )
  }
}
