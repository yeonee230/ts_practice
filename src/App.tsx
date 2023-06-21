import React from 'react';
import './App.css';
import * as D from './data'

function App() {
  return (
    
    <div className="App">
    {D.makeArray(10).map((notUsed, index) => (
      <div key={index}>
        <p>{D.randomId()}</p>
        <p>{D.randomName()}</p>
        <p>{D.randomJobTitle()}</p>
        <p>{D.randomSentence()}</p>
        <img src={D.randomAvatar()} width={100} height={100} alt='Avatar'/>
        <hr />
      </div>
      ))}
    {/* //  <p>
    //   {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
    //  </p>
    //  <img src={D.randomAvatar()} height="50" alt='small img' />
    //  <img src={D.randomImage()} height="300" alt='Large img'/> */}

    </div>
  );
}

export default App;
