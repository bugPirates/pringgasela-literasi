import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (  
        <div class="d-flex flex-column">
            <footer>
            <figure class="sm">
                <p>Project KKP &#169; 2020, Universitas Hamzanwadi, Fakultas Tekhnik. &#8482;#stayAtHome</p>
                <a href="https://www.facebook.com/pringgasela.literasi" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a> Pringgasela Literasi
                <a href="https://www.instagram.com/pringgaselaliterasi" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i></a> pringgaselaliterasi
                <a href="#"><i class="fa fa-whatsapp"></i></a> 0877-0280-2082
            </figure>
            </footer>
            {/* 
            Website ini di buat dengan keihlasan di hati saya, semoga bermanfaat bagi kalian semua
            Project KP 2020, Universitas Hamzanwadi Fakultas Tekhnik
            Created by: Gondes
            */}  
        </div>
        )
    }
}
