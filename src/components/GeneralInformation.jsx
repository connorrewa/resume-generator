// name, email, phone number
import { useState } from "react";
export default function GeneralInformation({ genInfo, pageState, onChange }) {
    if (pageState) {
        return (
            <>
                <h2>Personal Information</h2>
                {genInfo.name}
            </>
        );
    } else {
        
        return (
            <>
                <h2>Personal Information</h2>
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    id='name'
                    value={genInfo.name}
                    onChange={(e) => onChange(e.target.value, "name")}
                />
                <label htmlFor='email'>Email: </label>
                <input
                    type='text'
                    id='email'
                    value={genInfo.email}
                    onChange={(e) => onChange(e.target.value, "email")}
                />
                <label htmlFor='phone'>Phone: </label>
                <input
                    type='text'
                    id='phone'
                    value={genInfo.phone}
                    onChange={(e) => onChange(e.target.value, "phone")}
                />
            </>
        );
    }
}
