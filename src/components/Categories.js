import React from "react";

const Categories = ({ list, handleClick }) => {
  console.log(list);
  return (
    <>
      <div className="nav-menu">
        {list.map((category, index) => {
          return (
            <span key={index} onClick={() => handleClick(category)}>
              {category}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
