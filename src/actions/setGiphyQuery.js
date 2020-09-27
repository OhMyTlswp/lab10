import state from '../store';
import gifsRequest from './gifsRequest';
export default function setGiphyQuery(event) {
  state.giphy.offset = 0;
  state.giphy.q = event.target.value;
  gifsRequest();
}
