import React, { useState } from "react";
import cardArray from "./Data";
import "./Cards.css";

const Cards = () => {
  const [cards, setCards] = useState(cardArray);
  let clickadas = [];
  const flipCard = (ev, card) => {
    ev.currentTarget.classList.toggle("flip");
    if (clickadas.length < 2) {
      clickadas.push(card);
      console.log(clickadas[0].name);
      if (clickadas.length===2 && clickadas[0].name === clickadas[1].name && clickadas[0].id !== clickadas[1].id) {
        const newarray = [...cards].map((card) => {
          if (card.name === clickadas[0].name || card.name === clickadas[1].name) {
            card.img = "./exercise-1/tick.svg";
            console.log(card);
            return card;
          }
          return card;
        });
        setCards(newarray);
      } else if (clickadas.length===2) {
        setTimeout(()=>{
          ev.currentTarget.classList.toggle("flip");   
        },1000)
      }

      if (clickadas.length === 2) {
        clickadas = [];
      }
    }
    console.log(clickadas);
  };
  return (
    <div className="b-grid">
      {cards.map((card, i) => (
        <div
          className="card"
          onClick={(e) => {
            flipCard(e, card);
          }}
          key={i}
        >
          <img className="front" src={card.img} alt="oli" />
          <img className="reverse" src="exercise-1/universe.svg" alt="oli" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
