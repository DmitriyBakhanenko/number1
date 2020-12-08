import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
  const [visible, setVisible] = useState(false);
  const refElement = useRef();

  useEffect(() => {
    const onClickEvent = (event) => {
      if (!refElement.current) return;
      if (!refElement.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.body.addEventListener("click", onClickEvent);

    return () => {
      document.body.removeEventListener("click", onClickEvent);
    };
  }, []);

  const rendOptions = (
    <React.Fragment>
      <Link to="/" className="item">
        Джинсы, брюки
      </Link>
      <Link to="/" className="item">
        Блузы,рубашки,туники,футболки
      </Link>
      <Link to="/" className="item">
        Вязанные кардиганы,свитера,туники
      </Link>
      <Link to="/" className="item">
        Юбки, шорты
      </Link>
      <Link to="/" className="item">
        Платья
      </Link>
      <Link to="/" className="item">
        Куртки,жакеты,пальто
      </Link>
      <Link to="/" className="item">
        Костюмы
      </Link>
      <Link to="/" className="item">
        Пуховики,парки,шубы,куртки,пальто
      </Link>
    </React.Fragment>
  );

  return (
    <>
      <div className="ui menu">
        <a href="/" className="browse item">
          Browse
          <i className="dropdown icon"></i>
        </a>
      </div>
      <div className="ui fluid popup bottom left transition hidden">
        <div className="ui one column relaxed equal height divided grid">
          <div className="column">
            <h4 className="ui header">Fabrics</h4>
            <div className="ui link list">
              <a href="/" class="item">
                Cashmere
              </a>
              <a href="/" class="item">
                Linen
              </a>
              <a href="/" class="item">
                Cotton
              </a>
              <a href="/" class="item">
                Viscose
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//<div
//ref={refElement}
//onClick={() => setVisible(!visible)}
//className={`ui selection inverted dropdown ${
//visible ? "visible active" : ""
//}`}
//>
//<i className="dropdown icon"></i>
//<div className="text">Коллекция</div>
//<div className={`menu ${visible ? "visible transition" : ""}`}>
//{rendOptions}
//</div>
//</div>
