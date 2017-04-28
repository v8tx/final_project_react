export default function counter(state = 0, action) {
  switch (action.type) {
    case "GET STATUS":
      return true;
    default:
      return state;
  }
}