export default function infiniteScrollHandler(event, action) {
  if (event.target.scrollHeight - event.target.scrollTop <= event.target.clientHeight + 10) {
    if (action) action();
  }
}
