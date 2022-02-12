import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (    
        <li className='Feedback__buttons-item'>
            <button type="button" className='Feedback__button' onClick={onLeaveFeedback}>{options}</button>
        </li>
)};

export default FeedbackOptions;

FeedbackOptions.propType = {
    options: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.string.isRequired,
};