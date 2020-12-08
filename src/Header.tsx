import React, { useRef } from "react";

const onClick = (e: any, ref: any) => {
  e.preventDefault();
  console.log(ref.current);
};

const Header = () => {
  const refA = useRef();
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <div className="item">
          <img src="#" alt="" />
        </div>
        <a
          ref={refA.current}
          onClick={(e) => onClick(e, refA)}
          href="/"
          className="item active"
        >
          Главная
        </a>
        <a href="/" className="item">
          Коллекция
        </a>
        <a href="/" className="item">
          О нас
        </a>
        <a href="/" className="item">
          Контакты
        </a>
        <a href="/" className="item">
          Доставка
        </a>
      </div>
    </div>
  );
};

export default Header;
