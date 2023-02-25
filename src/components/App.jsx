import React, {Component} from "react";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout/Layout";
import FeedbackOptions from './FeedbackOptions'
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  };
  
  onLeaveFeedback =(event)=>{
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };

  countTotalFeedback =()=>{
   const {good,neutral,bad} = this.state;
   return good+neutral+bad;
  };

  countPositiveFeedbackPercentage =()=>{
   const {good} = this.state;
   return Math.round(good/this.countTotalFeedback() * 100)
  };

  render(){
    const options = Object.keys(this.state);
    const {good,neutral,bad} = this.state;
    
    return (
        <Layout>
          <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>

          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/> }
          </Section>
        <GlobalStyle/>
        </Layout>
    );
  };

};

export default App; 

