// school name, title of study, date of study
import { useState } from "react";
import "../styles/style.css";
export default function EducationalExperience({ eduExp, pageState, onChange }) {
    if (pageState) {
        return (
            <div className='card'>
                <h2>Educational Experience</h2>
                <div className='row'>
                    <h3>School:</h3>
                    <p>{eduExp.school}</p>
                </div>
                <div className='row'>
                    <h3>Major:</h3>
                    <p>{eduExp.study}</p>
                </div>
                <div className='row'>
                    <h3>Expected Graduation:</h3>
                    <p>{eduExp.date}</p>
                </div>
            </div>
        );
    }
    return (
        <div className='card'>
            <h2>Educational Experience</h2>
            <div className='row'>
                <label htmlFor='school'>School Name: </label>
                <input
                    type='text'
                    id='school'
                    value={eduExp.school}
                    onChange={(e) => onChange(e.target.value, "school")}
                />
            </div>
            <div className='row'>
                <label htmlFor='study'>Title of Study: </label>
                <input
                    type='text'
                    id='study'
                    value={eduExp.study}
                    onChange={(e) => onChange(e.target.value, "study")}
                />
            </div>
            <div className='row'>
                <label htmlFor='date'>Expected Graduation: </label>
                <input
                    type='text'
                    id='date'
                    value={eduExp.date}
                    onChange={(e) => onChange(e.target.value, "date")}
                />
            </div>
        </div>
    );
}
