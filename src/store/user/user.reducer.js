import { ACTION_USER_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUserData: {},
  userLogin: false,
  userClickPlaylist: [{}],
  currentClickPlaylist: {},
  audio: "",
  randomPlaylist: {},
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_USER_TYPES.SET_CURRENT_USER:
      return { ...state, currentUserData: payload };
    case ACTION_USER_TYPES.SET_USER_LOGIN:
      return { ...state, userLogin: payload };
    case ACTION_USER_TYPES.SET_CLICK_PLAYLIST:
      return { ...state, userClickPlaylist: payload };
    case ACTION_USER_TYPES.SET_CURRENT_CLICK_PLAYLIST:
      return { ...state, currentClickPlaylist: payload };
    case ACTION_USER_TYPES.SET_AUDIO:
      return { ...state, audio: payload };
    case ACTION_USER_TYPES.SET_RANDOM_PLAYLIST:
      return { ...state, randomPlaylist: payload };

    default:
      return state;
  }
};
