import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
  const handleAdd = (event, value) => { 
    console.log(event);
    value = value + 1;
    console.log(value);
  }
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>

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