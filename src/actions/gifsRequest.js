import state from '../store';

export default async function gifsRequest() {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${state.giphy.apiKey}&limit=${
    state.giphy.limit
  }&offset=${String(state.giphy.offset)}&q=${state.giphy.q}`;
  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      if (content.pagination.offset === 0) {
        state.giphy.list = content.data;
      } else {
        content.data.forEach((gif) => {
          state.giphy.list.push(gif);
        });
      }
    })
    .catch(() => {
      // console.error(err);
    });
}
