import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const AppointmentForm = () => {

    const specialists = ["General Physician", "Diabetes Specialists", "Dentists", "Eye Specialists"];
    const doctors = [
        {
            id: 1,
            name: "Dr. Viswas Kumar",
            specialty: ["General Physician", "Dentists"],
            rate: 500
        },
        {
            id: 2,
            name: "Dr. Shyam Agnihotri",
            specialty: ["Eye Specialists", "Dentists", "Diabetes Specialists"],
            rate: 450
        },
        {
            id: 3,
            name: "Dr. Roshan Obero",
            specialty: ["General Physician", "Diabetes Specialists"],
            rate: 600
        },
        {
            id: 4,
            name: "Dr. Shivalika Singh",
            specialty: ["Dentists", "Eye Specialists"],
            rate: 550
        },
        {
            id: 5,
            name: "Dr. Arbinda Reddy",
            specialty: ["Diabetes Specialists", "Dentists"],
            rate: 300
        }
    ]

    const [data, setData] = useState({
        pname: "",
        spe: "",
        doc: "",
        time: "",
        msg: ""
    })
    const [records, setRecords] = useState([])
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value
        // console.log(name, value);

        setData({ ...data, [name]: value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const newRecord = { ...data, id: new Date().getTime.toString() }
        // console.log(records);
        setRecords([...records, newRecord])
        setData({
            pname: "",
            spe: "",
            doc: "",
            time: "",
            msg: ""
        })
    }

    const deleteData = (n) => {
        const update = records.filter((e) => {
            return n !== e.pname
        })
        setRecords(update)

    }
    return (
        <>
            <form className='appointment-from' onSubmit={onSubmit}>
                <div className="row">
                    <input type="text" value={data.pname} onChange={handleInputs} name="pname" id="pname" placeholder='Patient Name' required />
                </div>
                <div className="row">
                    <div className="col">
                        <select value={data.specialty} onChange={handleInputs} name="spe" id="spe" required>
                            <option value="specialists">specialists</option>
                            {specialists.map((ele) => {
                                return <option value={ele} key={ele}>{ele}</option>
                            })}
                        </select>
                    </div>
                    <div className="col">
                        <select value={data.doctor} onChange={handleInputs} name="doc" id="doc" required>
                            <option value="Doctors">Doctors</option>
                            {doctors.map((ele) => {
                                return <option value={ele.name} key={ele.id}>{ele.name} &#10140; Fees: {ele.rate} ₹</option>
                            })}
                        </select>
                    </div>
                    <div className="col">
                        <select value={data.time} onChange={handleInputs} name="time" id="time" required>
                            <option value="Choose Time">Choose Time</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="5:20 PM">5:20 PM</option>
                            <option value="5:40 PM">5:40 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="6:20 PM">6:20 PM</option>
                            <option value="6:40 PM">6:40 PM</option>
                        </select>
                    </div>
                </div>

                <div className="row">

                    <textarea value={data.msg} onChange={handleInputs} name="msg" id="msg" cols="30" rows="10"></textarea>
                </div>
                <div className="row">
                    <button type='submit' className='book'>Submit</button>

                </div>
            </form>
            <div>

                {
                    records.map((e) => {
                        return (
                            <div key={Math.random()} className="appointmentText"> Patient Name is
                                <b> {e.pname}</b>, Patient search for <b>{e.spe}</b> and select <b>{e.doc}</b> on <b>{e.time}</b>. There symptoms is {e.msg}.  <FaTrashAlt style={{ color: "#e70b0b", cursor: 'pointer' }} onClick={() => { deleteData(e.pname) }} />

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AppointmentForm