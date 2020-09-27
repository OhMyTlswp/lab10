import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './search.css';
import setGiphyQuery from '../../actions/setGiphyQuery';
import state from '../../store';
import randomGiphyQuery from '../../actions/randomGiphyQuery';
function Search() {
  return (
    <div className="search">
      <input placeholder="Поиск" onChange={setGiphyQuery} value={state.giphy.q} className="search_input" type="text" />
      <button onClick={randomGiphyQuery} className="search_button">
        Случайная GIF
      </button>
    </div>
  );
}
export default view(Search);
