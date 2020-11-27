import { store } from '@risingstack/react-easy-state';

const state = store({
  giphy: {
    apiKey: 'GdAzCqwd1oDgDxfUhVxk66wYP5bXJtZc',
    list: [],
    q: 'cheese',
    offset: 0,
    limit: 20,
  },
});

export default state;
