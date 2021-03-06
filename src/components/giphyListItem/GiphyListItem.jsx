import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './giphyListItem.css';
import PropTypes from 'prop-types';

function GiphyListItem({ url, bitlyUrl, title }) {
  return (
    <div className="giphy-list_item">
      <img alt="" src={url} className="giphy-list_item_img" />
      <a target="1" href={bitlyUrl} className="giphy-list_item_title">
        {title}
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
