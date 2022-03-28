import React, { useEffect, useState } from "react";
import "./converter.css";
import ConverterResult from "./ConverterResult";

function Converter() {
  const [notes, setNotes] = useState(0);
  const [unit, setUnit] = useState("milligram");
  const [unitValues, setUnitValues] = useState([]);
  const units = [
    "milligram",
    "centigram",
    "decigram",
    "gram",
    "decagram",
    "hectogram",
    "kilogram",
  ];

  const handleInputChange = (e) => {
    setNotes(e.target.value);
    console.log(notes);
  };

  function handleUnitChange(e) {
    const targetUnit = e.target.value;
    setUnit(targetUnit);
    console.log(unit);
  }

  function returnUnitsArray() {
    const indexOfUnit = units.indexOf(unit);
    let tempUnitValues = [];
    let tempNotes = parseInt(notes);
    let tempNotesToPush = tempNotes;
    for (let i = 0; i < units.length; i++) {
      // tempNotesToPush = tempNotes;
      // if (indexOfUnit > i) {
      //   for (let j = 0; indexOfUnit - i; j++) {
      //     tempNotesToPush /= 10;
      //   }
      //   tempUnitValues[i] = tempNotesToPush;
      // }
      // if (indexOfUnit == i) {
      //   tempUnitValues[i] = tempNotesToPush;
      // }
      // if (indexOfUnit < i) {
      //   for (let j = 0; units.length - i; j++) {
      //     tempUnitValues[i] *= 10;
      //   }
      //   tempUnitValues[i] = tempNotesToPush;
      // }
      if (i > indexOfUnit) {
        console.log("i wieksze");
        for (let j = 0; j <units.length - i; j++) {
          tempNotesToPush /= 10;
        }
        tempUnitValues[i] = tempNotesToPush;
      }
      if (i < indexOfUnit) {
        console.log("i mniejsze");
        for (let j = 0; j < indexOfUnit - i; j++) {
          tempNotesToPush *= 10;
        }
        tempUnitValues[i] = tempNotesToPush;
      }
      if (i == indexOfUnit) {
        tempUnitValues[i] = tempNotesToPush;
      }
    }
    setUnitValues(tempUnitValues);
  }

  useEffect(() => {
    returnUnitsArray();
  }, [unit, notes]);

  return (
    <div>
      <select onChange={handleUnitChange}>
        {units.map((val, index) => {
          return (
            <option key={index + " " + val} value={val}>
              {val}
            </option>
          );
        })}
      </select>
      <input
        placeholder="Jednostka:"
        type="text"
        name="listElementInput"
        onChange={handleInputChange}
        value={notes.listElementInput}
      />
      {units.map((val, index) => {
        return (
          <ConverterResult
            key={index + " " + val}
            unit={val}
            unitValue={unitValues[index]}
          />
        );
      })}
    </div>
  );
}
export default Converter;
