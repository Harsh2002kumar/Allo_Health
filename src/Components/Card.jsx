import React, { useState } from "react";
import "../Style.css";

const Card = ({ item, cardSelectedHandler }) => {
  const [selectedJuice, setSelectedJuice] = useState("");
  const [selectedJuicePrice, setSelectedJuicePrice] = useState(0);

  const juiceClickHandler = (drink, price) => {
    setSelectedJuice((prevJuice) => (prevJuice === drink ? "" : drink));
    setSelectedJuicePrice((prevJuicePrice) =>
      prevJuicePrice === price ? 0 : price
    );
  };

  return (
    <>
      <div className="card" onClick={() => cardSelectedHandler(item)}>
        <div className="card-img">
          <img src={item.img} alt="error" />
        </div>
        <div className="card-content">
          <p>{item.title}</p>
          <h1>{item.description}</h1>
          <p>
            <b>Starter:</b> {item.starter}
          </p>
          <p>
            <b>Desert:</b> {item.desert}
          </p>
          <p>
            <b>Selected Drink:</b> {selectedJuice}
          </p>
          <div className="card-bottom">
            <div className="juices-img">
              {item.drinks.map((drink, index) => {
                return (
                  <img
                    src={drink.img}
                    alt="error"
                    key={index}
                    onClick={() => {
                      juiceClickHandler(drink.title, drink.price);
                    }}
                  />
                );
              })}
            </div>
            <div className="price-select">
              <h3>{(item.price + selectedJuicePrice).toFixed(2)}"&#x20AC;</h3>
              <button>Select</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Card;
