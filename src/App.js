import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback';

class App extends Component {

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
            <Feedback 
              options={this.state}
              onLeaveFeedback={this.handleIncrease}
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positiveFeedback}
            />
        </div>
    )
  }
}

export default App;
