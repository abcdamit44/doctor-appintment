import React from 'react'
import AppointmentForm from './AppointmentForm'


const MakeAnAppointment = () => {
    return (
        <>
            <div id="makeAnAppointment">
                <div className="container">
                    <h2>Make An Appointment</h2>
                    <div className="container">
                        <AppointmentForm />
                    </div>

                </div>
            </div>
        </>
    )
}

export default MakeAnAppointment