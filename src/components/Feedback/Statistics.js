import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
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
            <span className='Feedback__statistics-counter'>Total: {total}</span>
        </li>
        <li className='Feedback__statistics-item'>
            <span className='Feedback__statistics-counter'>Positive feedback: {positivePercentage}%</span>
        </li>
    </ul>
);

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};