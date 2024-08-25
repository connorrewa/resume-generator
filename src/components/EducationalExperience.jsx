// school name, title of study, date of study
import { useState } from "react";
export default function EducationalExperience({ eduExp, pageState }) {
    

    return (
        <>
            <h2>Educational Experience</h2>
            <label htmlFor='school'>School Name: </label>
            <input type='text' id='school' />
            <label htmlFor='study'>Title of Study: </label>
            <input type='text' id='study' />
            <label htmlFor='date'>Date of Study: </label>
            <input type='text' id='date' />
        </>
    );
}
