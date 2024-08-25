// company name, position title, main responsibilities, date start, date end
import { useState } from "react";
import "../styles/style.css";
export default function PracticalExperience({ pracExp, pageState, onChange, onDeleteButtonClick }) {
    {console.log(pracExp)}

    if (pageState) {
        return (
            <div className='card'>
                <h2>Work Experience</h2>
                <div className='row'>
                    <h3>Company Name:</h3>
                    <p>{pracExp.company}</p>
                </div>

                <div className='row'>
                    <h3>Position Title:</h3>
                    <p>{pracExp.position}</p>
                </div>
                <div className='row'>
                    <h3>Job Duties:</h3>
                    <p>{pracExp.responsibilities}</p>
                </div>
                <div className='row'>
                    <h3>Start Date:</h3>
                    <p>{pracExp.dateStart}</p>
                </div>
                <div className='row'>
                    <h3>End Date:</h3>
                    <p>{pracExp.dateEnd}</p>
                </div>
            </div>
        );
    }
    return (
        <div className='card'>
            <h2>Work Experience</h2>
            <div className='row'>
                <label htmlFor='company'>Company Name: </label>
                <input
                    type='text'
                    id='company'
                    value={pracExp.company}
                    onChange={(e) => onChange(e.target.value, "company")}
                />
            </div>
            <div className='row'>
                <label htmlFor='position'>Position Title: </label>
                <input
                    type='text'
                    id='position'
                    value={pracExp.position}
                    onChange={(e) => onChange(e.target.value, "position")}
                />
            </div>
            <div className='row'>
                <label htmlFor='resp'>Responsibilities: </label>
                <input
                    type='text'
                    id='resp'
                    value={pracExp.responsibilities}
                    onChange={(e) =>
                        onChange(e.target.value, "responsibilities")
                    }
                />
            </div>
            <div className='row'>
                <label htmlFor='startDate'>Start Date: </label>
                <input
                    type='text'
                    id='startDate'
                    value={pracExp.dateStart}
                    onChange={(e) => onChange(e.target.value, "dateStart")}
                />
            </div>
            <div className='row'>
                <label htmlFor='endDate'>End Date: </label>
                <input
                    type='text'
                    id='endDate'
                    value={pracExp.dateEnd}
                    onChange={(e) => onChange(e.target.value, "dateEnd")}
                />
            </div>

        </div>
    );
}
