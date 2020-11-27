import React, { useEffect } from 'react';
import { view } from '@risingstack/react-easy-state';
import GiphyListItem from '../GiphyListItem/GiphyListItem';
import './giphyList.css';
import state from '../../store';
import gifsRequest from '../../actions/gifsRequest';

function GiphyList() {
  useEffect(() => {
    gifsRequest();
  }, []);
  return (
    <div className="giphy-list">
      {state.giphy.list.map((gif) => (
        <GiphyListItem key={gif.id} url={gif.images.downsized.url} title={gif.title} bitlyUrl={gif.bitly_url} />
      ))}
    </div>
  );
}

export default view(GiphyList);
