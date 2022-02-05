import React, { Component } from 'react';
import Buttons from './Buttons';
import Statistics from './Statistics';
import './Feedback.css';

class Feedback extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue,
    }

    handleIncrease = key => {
        this.setState(prevState => ({[key]: prevState[key] + 1}));
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad; 
    }

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        return (Math.round(good * 100 / this.countTotalFeedback())); 
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positiveFeedback = this.countPositiveFeedbackPercentage();

        return (
            <div className='Feedback'>
                <h1 className='Feedback__header'>Please leave feedback</h1>

                {/* Buttons */}
                <ul className='Feedback__buttons'>
                    {Object.keys(this.state).map(key => 
                    <Buttons 
                        id={key} 
                        onIncrease={() => this.handleIncrease(key)} 
                    />)}
                </ul>

                {/* Statistics */}
                {total === 0 ? 
                <p className='Feedback__empty'>There is no feedback</p> 
                : 
                <Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad}
                    countTotal={total}
                    countPositive={positiveFeedback}
                />
                }
            </div>
        )
    }
}

export default Feedback;