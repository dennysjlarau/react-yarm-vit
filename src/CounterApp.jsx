import PropTypes from 'prop-types';
import {useState} from 'react';

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleSustract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSustract }>-1</button>
      <button onClick={ handleReset }>Reset</button>

    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 0
}