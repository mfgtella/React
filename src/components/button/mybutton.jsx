import { useEffect } from "react";

const buttonStyle = {
  color:"red", 
  fontFamily:"aria", 
  fontSize:18};

const resetStyle = {
  color:"green", 
  fontFamily:"calibri", 
  fontSize:20};



export const MyButton = ({ onClick: handleOnClick, children, className }) => {
  console.log(`Estoy dentro del componente button de ${children}`);

  /*
     el hook useEffect es utilizado para trabajar con efectos secuendarios enm
     componentes funcionales.

     Podemos controlar las acciones que ocurren después de que el componente se renderiza,
     como realizar llamadas a APIs, suscripciones a eventos, manipulación del DOM.

     useEffect( ()=> , [] );

    */
  const maxValue = 0;
  
  useEffect(() => {
    console.log(`Estoy dentro del useEffect de ${children}`);
  }, [] );

  return (
    <>
    <div className={className}>
      <button
        onClick={handleOnClick}
        style= {children === "Reset" ? resetStyle : buttonStyle}>
      {children} </button>
      </div>
    </>
  );
};