import state from '../store';

export default function setGiphyQuery(event) {
  state.giphy.offset = 0;
  state.giphy.q = event.target.value;
}
