import { createStore } from 'redux';

const initialState = {
  permissionToPlay: false,
  permissionUrl: ''
}

const store = createStore((state = initialState, action) => {
  const { type, permissionUrl } = action;
  switch (type) {
    case "PAUSE":
      return {
        permissionToPlay: false,
        permissionUrl
      }
    case "PLAY":
      return {
        permissionToPlay: true,
        permissionUrl
      }
    default:
      return state;
  }
});

export default store;