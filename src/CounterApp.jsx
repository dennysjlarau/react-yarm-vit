import PropTypes from 'prop-types';
import {useState} from 'react';

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = (event, value) => { 
    setCounter(counter + 1);
    // setCounter((c) => c +1);
  }
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ (event) => handleAdd(event, value) }>
        +1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 0
}