import React from "react";

function ConverterResult(props) {
  
  return (
    <div>
        <h3>Jednostka: {props.unit} | Wartość: {props.unitValue}</h3>
    </div>
  );
}
export default ConverterResult;
