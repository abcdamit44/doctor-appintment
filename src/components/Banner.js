import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banner" style={{
                background: "url(images/bg.jpg)", backgroundPosition: "center 1px",
                backgroundSize: "cover", backgroundRepeat: "no-repeat"
            }}>
                <div className="container">
                    <div className="banner-content">
                        <img src="images/plus.png" alt="" />
                        <h2>Superior care based on <br /> our decades of <br /> experience.</h2>
                        <a href="#makeAnAppointment">Make An Appointment</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner