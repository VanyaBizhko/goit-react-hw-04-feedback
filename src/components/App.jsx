import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Message from './Message/Message';
import Section from './Section/Section';
import Feddback from './Feddback/Feddback';

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 const handleChange = (e) => {
 
   switch (e) {
     case 'good':
      setGood (good +1);
       break
     case 'neutral':
       setNeutral (neutral + 1);
       break
     case 'bad':
       setBad (bad + 1);
       break
     default:
       return
   }
 }
  const handleTotalFeddback = () => {
    return good + neutral + bad
  }
  const handlePositiveFeddback = () => {
  return Math.round((good / (good + neutral + bad)) * 100);
};
  
  return (
    
    
    <>
      
    <Section title="Please leave your feedback:">
          <Feddback  
          options={['good', 'neutral', 'bad']}
          
          feddbackBtns={handleChange}
          
          />
      </Section >
      <Section title="Statistics:">
        { handleTotalFeddback() ?(<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={handleTotalFeddback()}
          positivePercentage={handlePositiveFeddback()}
          />) : (<Message
          message="There is no feedback yet."
          > </Message>)} 
        </Section>
      </>
  )
}


