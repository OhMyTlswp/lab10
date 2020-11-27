import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './giphyBrowser.css';
import Search from '../Search/Search';
import GiphyList from '../GiphyList/GiphyList';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

function GiphyBrowser() {
  return (
    <div className="giphy-browser">
      <Search />
      <InfiniteScroll>
        <GiphyList />
      </InfiniteScroll>
    </div>
  );
}

export default view(GiphyBrowser);
