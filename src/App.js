import "./App.css";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./components/data";
import { useState } from "react";

function App() {
  const initialValue = items;
  const [menuItems, setMenuItems] = useState(initialValue);

  const categoriesSet = new Set(items.map((item) => item.category));
  const categoriesList = ["all", ...categoriesSet];

  const handleClick = (category) => {
    if (category === "all") {
      setMenuItems(initialValue);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <div className="heading">
          <h1>Menu Items</h1>
        </div>
        <Categories list={categoriesList} handleClick={handleClick} />
        <div className="menu-container">
          {menuItems.map((item) => (
            <Menu key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
