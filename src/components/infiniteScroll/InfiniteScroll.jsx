import React from 'react';
import { view } from '@risingstack/react-easy-state';
import './infiniteScroll.css';
import infiniteScrollHandler from '../../actions/infiniteScrollHandler';
import PropTypes from 'prop-types';
function InfiniteScroll(props) {
  return (
    <div onScroll={infiniteScrollHandler} className={props.mod ? 'infinite-scroll ' : 'infinite-scroll ' + props.mod}>
      {props.children}
    </div>
  );
}
InfiniteScroll.propTypes = {
  mod: PropTypes.string,
  children: PropTypes.element.isRequired,
};
export default view(InfiniteScroll);
