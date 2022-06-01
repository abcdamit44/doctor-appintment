import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header>
                <div className="preheader">
                    <p> <FaMapMarkerAlt /> Address: 1234 Street, New Delhi, India, 100001</p>
                    <a href="/"><FaPhoneAlt /> 9876543210</a>
                </div>
                <div className="navbar">
                    <div className="container">
                        <div className="logo">
                            <a href="/"><img src="images/logo.png" alt="Logo" /></a>
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#scheduled">Appointments</a></li>
                            </ul>
                        </div>
                        <div className="appointment-btn">
                            <a href="#makeAnAppointment"><FaRegCalendarAlt /> Make An Appointment</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header