import React from 'react'
import bg from './img/fearlessLogo.png'
import './App.css';
import CounterComponent from './counterComponent/counterComponent'

const App: React.FC = () => {
  return (
    <div className="App">
        <img src={bg} className="fearless-logo" alt="logo" />
        <CounterComponent 
          apiKey={'1ccb732e-b55a-4404-ad3f-0f99c02fe44e'}
          namespace={'fearless.tech'}
        />
    </div>
  );
}

export default App;
