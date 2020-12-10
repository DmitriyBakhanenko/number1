import React from "react";
import image from "../assets/homepage02.jpg";
import "./Main.css";

const Main = () => {
  return (
    <div className="main container">
      <img className="backimg" src={image} alt="back ground pic" />
      <div className="dimmer"></div>
      <div className="text container">
        <h1 className="main header text">
          Лучшие итальянские и турецкие бренды
        </h1>
        <h3 className="main secondary text">
          Откройте для себя новую коллекцию лучших брендов
        </h3>
        <div className="ui primary button">Посмотреть</div>
      </div>
    </div>
  );
};

export default Main;
