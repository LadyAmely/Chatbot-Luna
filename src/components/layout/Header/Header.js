import React from 'react';
import "../../../assets/styles/layout/header.css";
import { FaFacebook, FaTwitter, FaInstagram, FaCog } from 'react-icons/fa';
function Header(){

    return(
        <div className="header">
            <div className="header-left">
                <div className="icon-circle">
                    <FaCog/>
                </div>
                <span className="header-text">Settings</span>
            </div>
            <div className="header-right">
                <div className="icon-circle">
                    <FaFacebook/>
                </div>
                <div className="icon-circle">
                    <FaTwitter/>
                </div>
                <div className="icon-circle">
                    <FaInstagram/>
                </div>
            </div>
        </div>
    );
}

export default Header;