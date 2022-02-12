import React from "react";
import PropTypes from 'prop-types';

import Section from "../Section/Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import './Feedback.css';

const Feedback = ({ options, onLeaveFeedback, good, neutral, bad, total, positivePercentage }) => {
        return (
            <>
                <Section 
                    children={
                        <ul className='Feedback__buttons'>
                        {Object.keys(options).map(key => 
                            <FeedbackOptions 
                                key={key}
                                options={key}
                                onLeaveFeedback={() => onLeaveFeedback(key)} 
                            />
                        )}
                    </ul>
                    }
                />

                <Section 
                    children={
                        total === 0 ? 
                        <p className='Feedback__empty'>There is no feedback</p> 
                        : 
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    }
                />
            </>
        )
}

export default Feedback;

Feedback.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number,
        positivePercentage: PropTypes.number,
    }),
    onLeaveFeedback: PropTypes.func,
}