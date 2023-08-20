import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Message from './Message/Message';
import Section from './Section/Section';
import Feddback from './Feddback/Feddback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  
  }
  feddbackBtn = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1
    }));
  };
  handleTotalFeddback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };
  handlePositiveFeddback = ({ good, neutral, bad }) => {
  return Math.round((good / (good + neutral + bad)) * 100);
};
  
  
render() {
  const { good, neutral, bad } = this.state
  const totalFeddback = this.handleTotalFeddback(this.state)
  const positiveFeddback = this.handlePositiveFeddback({ good, neutral, bad });
  return (
      <>
    <Section title="Please leave your feedback:">
          <Feddback  
          options={['good', 'neutral', 'bad']}
          feddbackBtns={this.feddbackBtn}
          
          />
      </Section >
      <Section title="Statistics:">
        { totalFeddback?(<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeddback}
          positivePercentage={positiveFeddback}
          />) : (<Message
          message="There is no feedback yet."
          > </Message>)}
       </Section>
      </>
  );}
};
