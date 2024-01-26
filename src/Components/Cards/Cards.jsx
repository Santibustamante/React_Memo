import React from "react";
import cardArray from "./Data";
import "./Cards.css";

const Cards = () => {

  return  (
    <>
      <div className="b-grid">
        {cardArray.map((card, i) => (
          <div className="card" key={i} onClick={(e)=>{
            const clickedCard = e.currentTarget
            clickedCard.classList.toggle('girada')
            

            console.log(e.currentTarget)}}>
            <div className="frente">
              <img src={card.img} alt="" />
            </div>
            <div className="reverso">
              <img src="exercise-1/universe.svg" alt="" />
            </div>
          </div>
          ))}
      </div>
    </>
  );
};

export default Cards;
