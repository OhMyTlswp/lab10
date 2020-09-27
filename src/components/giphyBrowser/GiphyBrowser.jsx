import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './giphyBrowser.css';
import Search from '../../components/search/Search';
import GiphyList from '../../components/giphyList/GiphyList';
import InfiniteScroll from '../../components/infiniteScroll/InfiniteScroll';
function GiphyBrowser() {
  return (
    <div className="giphy-browser">
      <Search />
      <InfiniteScroll children={<GiphyList />} />
    </div>
  );
}
export default view(GiphyBrowser);
