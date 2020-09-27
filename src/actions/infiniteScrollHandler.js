import state from '../store';
import gifsRequest from './gifsRequest';
export default function infiniteScrollHandler(event) {
  if (event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight) {
    state.giphy.offset += state.giphy.limit;
    gifsRequest();
  }
}
