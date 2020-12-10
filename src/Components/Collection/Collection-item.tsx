import React from "react";

const CollectionItem = ({ title }: string) => (
  <div className="menu item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">Посмотреть</span>
    </div>
  </div>
);

export default CollectionItem;
