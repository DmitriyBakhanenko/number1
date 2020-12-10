import React from "react";
import { sections } from "./065 directory.data.js";

const Collection = () => {
  return (
    <div className="ui three column grid">
      {sections.map((section) => (
        <div key={section.id} className="ui card">
          <a className="image" href={section.linkUrl}>
            <img
              style={{ height: "400px" }}
              src={section.imageUrl}
              alt="card pic"
            />
          </a>
          <div className="content text center">
            <a className="header text center" href={section.linkUrl}>
              {section.title}
            </a>
            <div className="meta">
              <div>Посмотреть</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
