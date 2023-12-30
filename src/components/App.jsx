import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    if (this.state.good === 0) {
      return 0;
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);
  }
  handleClick = btnName => {
    this.setState(prevState => {
      return {
        [btnName]: prevState[btnName] + 1,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          fontSize: '16px',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        <Section title="Please leave the feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
          <h3>Statistic</h3>
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
export default App;
