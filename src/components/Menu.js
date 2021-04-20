import React from "react";

const Menu = ({ item }) => {
  const { title, price, img, desc } = item;
  return (
    <>
      <div className="menu-item">
        <div className="menu-image">
          <img src={img} alt={title} />
        </div>
        <div className="info-section">
          <h3 className="title">
            {title} <span className="price-tag">${price}</span>
          </h3>
          <p className="desc">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
