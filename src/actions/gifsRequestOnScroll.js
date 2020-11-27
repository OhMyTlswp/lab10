import state from '../store';
import gifsRequest from './gifsRequest';

export default function gifsRequestOnScroll() {
  state.giphy.offset += state.giphy.limit;
  gifsRequest();
}
