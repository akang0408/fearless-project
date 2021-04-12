import './counterComponent.css';
import { useState } from 'react';

interface ICounterProps {
  apiKey: string,
  namespace: string
}
const CounterComponent: React.FC<ICounterProps> = ({ apiKey, namespace }) => {
  const [hitCount, setHitCount] = useState(0);
  const [loaded, setLoaded] = useState(false)

  const onClicky = () => {
    fetch(`https://api.countapi.xyz/hit/${namespace}/${apiKey}`)
    .then(response => response.json())
    .then(data => {
      setHitCount(data.value)
      setLoaded(true)
    })
  }
  return (
    <div className='container'>
      {loaded && <h2>{namespace} has been hit {hitCount} times.</h2>}
      <button onClick={onClicky}>Display Current Hits at {namespace}</button>
    </div>
  );
}

export default CounterComponent;
