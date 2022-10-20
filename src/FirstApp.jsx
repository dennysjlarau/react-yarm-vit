// import { Fragment } from "react"

// export const FirstApp = () => {
//   return (
//     <Fragment>
//       <h2>Dennys Javier Lara Uquillas</h2>
//       <p>Este es un ejemplo de párrafo</p>
//     </Fragment>
//   )
// }
import PropTypes from 'prop-types';


const newMessage = {
  message: 'Hola Mundo',
  title: 'Dennys Lara',
};

const getSuma = (num1, num2) => {
  return num1 + num2;
}

export const FirstApp = ({title, subTitle}) => {
  // if(!title){
  //   throw new Error('El título no existe');
  // }
  return (
    <>
      <code>{ JSON.stringify(newMessage) }</code>
      <p>Este es un ejemplo de párrafo</p>
      <h1>{getSuma(3,5)}</h1>
      <h2>{ title }</h2>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}