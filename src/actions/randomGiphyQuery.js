import state from '../store';
import gifsRequest from './gifsRequest';
import randInt from './randInt';
export default function randomGiphyQuery() {
  state.giphy.q = state.giphy.requests[randInt(0, state.giphy.requests.length - 1)];
  state.giphy.offset = 0;
  gifsRequest();
}
