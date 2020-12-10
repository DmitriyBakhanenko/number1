import React from "react";
import "./collection.preview.scss";
import { createStructuredSelector } from "reselect";
import CollectionItem from "../collection-item/collection-item";
import OverlayItem from "../overlay-item/overlay-item";
import { connect } from "react-redux";
import { selectOverlayHidden } from "../../redux/overlay/overlay.selectors";

const CollectionPreview = ({ title, items, isOverlayHidden }) => (
  <>
    {isOverlayHidden ? null : <OverlayItem />}
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  </>
);

const mapStateToProps = createStructuredSelector({
  isOverlayHidden: selectOverlayHidden,
});

export default connect(mapStateToProps)(CollectionPreview);
