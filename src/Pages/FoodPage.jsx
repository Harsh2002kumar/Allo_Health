import React, { useState, useEffect } from "react";
import List from "../Components/List";
import Card from "../Components/Card";
import MealSection from "../Components/MealSection";
import "../Style.css";
import Dataset from "../Utils/allo-fullstack-Assignment Dataset.json";
import Pagination from "../Components/Pagination";

const FoodPage = () => {
  const [list, setList] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filterList, setFilterList] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [selectedCard, setSelectedCard] = useState([]);
  const foodPerPage = 3;

  const loadData = async () => {
    setList(Dataset.labels);
    setFoodList(Dataset.meals);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filteredFoodList = selectedLabel
      ? foodList.filter((food) => food.labels.includes(selectedLabel))
      : foodList;
    setFilterList(filteredFoodList);
  }, [selectedLabel, foodList]);

  const startIndex = currentPage * foodPerPage;
  const endIndex = startIndex + foodPerPage;
  const foodSubset = filterList.slice(startIndex, endIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const LabelClick = (label) => {
    setSelectedLabel((prevLabel) => (prevLabel === label ? null : label));
  };

  const cardHandler = (item) => {
    const isSelected = selectedCard.some((card) => card.id === item.id);

    const newSelectedCards = isSelected
      ? selectedCard.filter((card) => card.id !== item.id)
      : [...selectedCard, item];

    setSelectedCard(newSelectedCards);
  };

  const totalPrice = selectedCard.reduce((total, card) => {
    return total + card.price;
  }, 39);

  return (
    <div className="main-page">
      <div className="left-section">
        <div className="items-list">
          {list.map((item) => {
            return (
              <List
                key={item.id}
                name={item.label}
                LabelClick={LabelClick}
                selected={item.id === selectedLabel}
                label={item.id}
              />
            );
          })}
        </div>
        <div className="combo-list">
          {foodSubset.map((item, index) => {
            return <Card key={index} item={item} cardHandler={cardHandler} />;
          })}
        </div>

        <div className="pagination">
          <Pagination
            foodPerPage={foodPerPage}
            totalPages={filterList.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className="right-section">
        <MealSection
          totalPrice={totalPrice}
          selectedCard={selectedCard}
        ></MealSection>
      </div>
    </div>
  );
};

export default FoodPage;
