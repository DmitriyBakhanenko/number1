import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";

const Header = () => {
  const [activeItem, setActiveItem] = useState(null);
  const headRef = useRef();

  useEffect(() => {
    console.log("wwww");
    const refArray = Object.values(headRef.current.children);
    const activeItem = refArray.filter(
      (item) => item.className === "item active"
    );
    setActiveItem(activeItem[0]);
  }, []);

  const handleClick = (e) => {
    //e.preventDefault();
    activeItem.className = "item";
    e.target.className = "item active";
    setActiveItem(e.target);
  };

  return (
    <div className="ui inverted segment">
      <div ref={headRef} className="ui inverted secondary pointing menu">
        <div className="item">
          <img src="#" alt="" />
        </div>
        <Link onClick={(e) => handleClick(e)} to="/" className="item active">
          Главная
        </Link>
        <Dropdown />
        <Link onClick={(e) => handleClick(e)} to="/collection" className="item">
          Коллекция
        </Link>
        <Link onClick={(e) => handleClick(e)} to="/about" className="item">
          О нас
        </Link>
        <Link onClick={(e) => handleClick(e)} to="/contacts" className="item">
          Контакты
        </Link>
        <Link onClick={(e) => handleClick(e)} to="/delivery" className="item">
          Доставка
        </Link>
      </div>
    </div>
  );
};

export default Header;
