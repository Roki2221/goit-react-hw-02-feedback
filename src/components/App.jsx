import { Component } from 'react';
import Statistics from './Statistics/Statistics';

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
      <div style={{}}>
        <div>
          <h2>Please leave the feedback</h2>
          <div>
            <button type="button" onClick={() => this.handleClick('good')}>
              Good
            </button>
            <button type="button" onClick={() => this.handleClick('neutral')}>
              Neutral
            </button>
            <button type="button" onClick={() => this.handleClick('bad')}>
              Bad
            </button>
          </div>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </div>
      </div>
    );
  }
}
export default App;
