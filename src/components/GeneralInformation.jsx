// name, email, phone number
import { useState } from "react";
import "../styles/style.css";
export default function GeneralInformation({ genInfo, pageState, onChange }) {
    if (pageState) {
        return (
            <div className='card'>
                <h2>Personal Information</h2>
                <div className='row'>
                    <h3>Name:</h3>
                    <p>{genInfo.name}</p>
                </div>
                <div className='row'>
                    <h3>Email:</h3>
                    <p>{genInfo.email}</p>
                </div>
                <div className='row'>
                    <h3>Phone:</h3>
                    <p>{genInfo.phone}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='card'>
                <h2>Personal Information</h2>
                <div className='row'>
                    <label htmlFor='name'>Name: </label>
                    <input
                        type='text'
                        id='name'
                        value={genInfo.name}
                        onChange={(e) => onChange(e.target.value, "name")}
                    />
                </div>
                <div className='row'>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type='email'
                        id='email'
                        value={genInfo.email}
                        onChange={(e) => onChange(e.target.value, "email")}
                    />
                </div>
                <div className='row'>
                    <label htmlFor='phone'>Phone: </label>
                    <input
                        type='text'
                        id='phone'
                        value={genInfo.phone}
                        onChange={(e) => onChange(e.target.value, "phone")}
                    />
                </div>
            </div>
        );
    }
}
