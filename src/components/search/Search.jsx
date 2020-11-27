import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './search.css';
import setGiphyQuery from '../../actions/setGiphyQuery';
import state from '../../store';
import gifsRequest from '../../actions/gifsRequest';

function Search() {
  return (
    <div className="search">
      <input placeholder="Поиск" onChange={setGiphyQuery} value={state.giphy.q} className="search_input" type="text" />
      <button type="button" onClick={gifsRequest} className="search_button">
        Поиск
      </button>
    </div>
  );
}

export default view(Search);
