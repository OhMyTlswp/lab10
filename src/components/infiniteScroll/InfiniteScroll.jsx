import React from 'react';
import PropTypes from 'prop-types';
import { view } from '@risingstack/react-easy-state';
import './infiniteScroll.css';
import infiniteScrollHandler from '../../actions/infiniteScrollHandler';
import gifsRequestOnScroll from '../../actions/gifsRequestOnScroll';

function InfiniteScroll({ mod, children }) {
  return (
    <div
      onScroll={(event) => {
        infiniteScrollHandler(event, gifsRequestOnScroll);
      }}
      className={mod ? `infinite-scroll ${mod}` : 'infinite-scroll '}
    >
      {children}
    </div>
  );
}
InfiniteScroll.defaultProps = {
  mod: null,
};
InfiniteScroll.propTypes = {
  mod: PropTypes.element,
  children: PropTypes.element.isRequired,
};

export default view(InfiniteScroll);
