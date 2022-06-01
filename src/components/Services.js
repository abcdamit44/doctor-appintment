import React from 'react'

const Services = () => {
    return (
        <>
            <div id="services">
                <div className="container">
                    <h2>
                        Our team provides the following services
                    </h2>
                    <div className="ourServices ">
                        <div className="card d-flex align-items-center">
                            <img src="images/therapist.png" alt="" />
                            <h3>General Physicians</h3>
                        </div>
                        <div className="card d-flex align-items-center">
                            <img src="images/tooth.png" alt="" />
                            <h3>Dentists</h3>
                        </div>
                        <div className="card d-flex align-items-center">
                            <img src="images/sugar-blood-level.png" alt="" />
                            <h3>Diabetes Specialists</h3>
                        </div>
                        <div className="card d-flex align-items-center">
                            <img src="images/therapist.png" alt="" />
                            <h3>Eye Specialists</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services