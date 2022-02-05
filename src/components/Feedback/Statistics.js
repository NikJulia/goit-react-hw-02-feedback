import React from "react";

const Statistics = ({ good, neutral, bad, countTotal, countPositive }) => (
    <ul className='Feedback__statistics'>
                    <li className='Feedback__statistics-item'>
                        <span className='Feedback__statistics-counter'>Good: {good}</span>
                    </li>
                    <li className='Feedback__statistics-item'>
                        <span className='Feedback__statistics-counter'>Neutral: {neutral}</span>
                    </li>
                    <li className='Feedback__statistics-item'>
                        <span className='Feedback__statistics-counter'>Bad: {bad}</span>
                    </li>
                    <li className='Feedback__statistics-item'>
                        <span className='Feedback__statistics-counter'>Total: {countTotal}</span>
                    </li>
                    <li className='Feedback__statistics-item'>
                        <span className='Feedback__statistics-counter'>Positive feedback: {countPositive}%</span>
                    </li>
                </ul>
);

export default Statistics;