import { store } from '@risingstack/react-easy-state';
let state = store({
  giphy: {
    apiKey: 'GdAzCqwd1oDgDxfUhVxk66wYP5bXJtZc',
    list: [],
    q: 'cheese',
    offset: 0,
    limit: 20,
    endType: 0,
    requests: ['cat', 'dog', 'parrot', 'sad', 'lol', 'kek', 'funny', 'skateboard', 'scary', 'fight', 'bro', 'bomb'],
  },
});
export default state;
