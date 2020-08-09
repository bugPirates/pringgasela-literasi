import React, { Component } from 'react';

import { Grid, Row, Image } from 'react-bootstrap';
import './News.css';
import Iframe from './Iframe';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/book.jpg" className="header-image" />
        <Grid>
          <h2>Kegiatan</h2>
          <Row>
             <Iframe source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpringgasela.literasi%2Fposts%2F117107863416074&width=500"  />  <br/>
             <Iframe source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpringgasela.literasi%2Fposts%2F111495000644027&width=500"  /> 
             <Iframe source="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpringgasela.literasi%2Fposts%2F110907084036152&width=500" />
          </Row>
        </Grid>
        {/* 
            Website ini di buat dengan keihlasan di hati saya, semoga bermanfaat bagi kalian semua
            Project KP 2020, Universitas Hamzanwadi Fakultas Tekhnik
            Created by: Gondes
            */}  
      </div>
    )
  }
}
