import React, { useEffect, useState } from "react";
import "./styles.css";
import Foot from "./components/Foot";

export default function App() {
  const [dogImage, setDogImage] = useState({});
  useEffect(() => {
    fetch(process.env.REACT_APP_BACK_END_URL)
      .then(res => res.json())
      .then(res => setDogImage(res));
  }, []);

  function newDog() {
    fetch(process.env.REACT_APP_BACK_END_URL)
      .then(res => res.json())
      .then(res => setDogImage(res));
  }

  return (
    <div className="App">
      <div className="main">
        <h2>THIS A DOG</h2>
        <img className="dogpic" src={dogImage} alt="dogs" />
        <br />
        <button className="Button" onClick={newDog}>
          SHOW ME ANOTHER
        </button>
        <Foot />
      </div>
    </div>
  );
}
