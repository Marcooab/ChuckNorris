import React from 'react'
import "./Card.css"
import { useState, useEffect } from 'react';
import icon from "./chuck.png"

function Card() {
  const [citation, setCitation] = useState(null)
  useEffect(() => {
    setInterval(function(){
    fetch("https://api.chucknorris.io/jokes/random", {
    method: "GET"
  })
  .then((response) => response.json())
    .then((value) => {
        setCitation(value.value)
      }) 
    .catch((error) => console.log(error));
  }, 5000)
  }, []);

  return (
    <div>
      <div className="card_container">
        <header>
          <img src={icon} className="icon" alt="image" />
        </header>
        <h2>{citation}</h2>
      </div>
    </div>
  )
}

export default Card