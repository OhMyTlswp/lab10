import React from "react";
import { view } from "@risingstack/react-easy-state";
import "./giphyListItem.css";
import PropTypes from "prop-types";
function GiphyListItem(props) {
  return (
    <div className="giphy-list_item">
      <img lazy alt="" src={props.url} className="giphy-list_item_img" />
      <a target="1" href={props.bitlyUrl} className="giphy-list_item_title">
        {props.title}
      </a>
    </div>
  );
}
GiphyListItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bitlyUrl: PropTypes.string.isRequired,
};
export default view(GiphyListItem);
