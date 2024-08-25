// company name, position title, main responsibilities, date start, date end
import { useState } from "react";
export default function PracticalExperience({ pracExp, pageState}) {
    


    return (
        <>
            <h2>Work Experience</h2>
            <label htmlFor='company'>Company Name: </label>
            <input type='text' id='company' />
            <label htmlFor='position'>Position Title: </label>
            <input type='text' id='position' />
            <label htmlFor='resp'>Responsibilities: </label>
            <input type='text' id='resp' />
            <label htmlFor='startDate'>Start Date: </label>
            <input type='text' id='startDate' />
            <label htmlFor='endDate'>End Date: </label>
            <input type='text' id='endDate' />
            
        </>
    );
}