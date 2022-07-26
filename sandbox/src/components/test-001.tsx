import { useState } from 'react';

export default function Test001() {
  const [number, setNumber] = useState(0)

  const increase = () => {
    setNumber(number + 1)
  }

  const increaseAsyncBad = () => {
    setTimeout(() => {
      setNumber(number + 1)
    }, 5000);
  }

  const increaseAsyncGood = () => {
    setTimeout(() => {
      setNumber(currentNumber => currentNumber + 1)
    }, 5000);
  }

  return (
    <div className='test'>
      <h2>Test 001 : useState Functional Update (Why useState doesn't update immediately?)</h2>
      <p>...</p>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={increaseAsyncBad}>Increase Bad</button>
        <button onClick={increaseAsyncGood}>Increase Good</button>
      </div>
      <div style={{ fontSize: '3em' }}>{number}</div>
    </div>
  );
}

