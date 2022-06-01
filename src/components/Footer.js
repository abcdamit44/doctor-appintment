import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="topFooter container">
                    <div className="footerAddress">
                        <h4>Contact Us</h4>
                        <div className="innerFooterAddress">
                            <p> <FaMapMarkerAlt /> Address: 1234 Street, <br /> New Delhi, India, 100001</p>
                            <a href="/"><FaPhoneAlt /> 9876543210</a>
                        </div>

                    </div>
                    <div className="footerQuickLinks">
                        <h4>Quick Links</h4>
                        <div className="innerFooterAddress">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#scheduled">Appointments</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="socialLinks">
                        <h4>Social Links</h4>
                        <div className="innerFooterAddress d-flex align-items-center justify-content-center">
                            <a href="/"><FaFacebookF /></a>
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="bottomFooter">
                    Copyright © 2022 Health Net Global – All Rights Reserved.
                </div>
            </footer>
        </>
    )
}

export default Footer