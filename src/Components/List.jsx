import React from "react";
import "../Style.css";

const List = ({ name, LabelClick, selected, label }) => {
  const buttonStyle = {
    border: selected ? "1px solid #730099" : "1px solid black",
    backgroundColor: selected ? "#f9e6ff" : "#fff",
    color: selected ? "#730099" : "black",
    boxShadow: selected ? "1px 2px 1px 1px #730099" : "1px 2px 1px 1px black",
  };

  const handleClick = () => {
    LabelClick(label);
  };

  return (
    <div className="selected-button" style={buttonStyle} onClick={handleClick}>
      {name}
    </div>
  );
};

export default List;
