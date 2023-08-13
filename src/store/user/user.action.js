import { ACTION_USER_TYPES } from "./user.types";

const url =
  "https://spotify23.p.rapidapi.com/user_profile/?id=iq46bg4tmps85e8o7jfxi8j10&playlistLimit=10&artistLimit=10";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1f10d97e0dmsheafa04f64a17dc1p1b2e26jsn32b9857451f5",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};
export const setCurrentUser = (data) => {
  return { type: ACTION_USER_TYPES.SET_CURRENT_USER, payload: data };
};
export const setUserLogin = (bool) => {
  return { type: ACTION_USER_TYPES.SET_USER_LOGIN, payload: bool };
};

export const setClıckPlaylıst = (data) => {
  return { type: ACTION_USER_TYPES.SET_CLICK_PLAYLIST, payload: data };
};
export const setCurrentClickPlaylist = (playlist) => {
  return {
    type: ACTION_USER_TYPES.SET_CURRENT_CLICK_PLAYLIST,
    payload: playlist,
  };
};
export const setAudio = (audio) => {
  return {
    type: ACTION_USER_TYPES.SET_AUDIO,
    payload: audio,
  };
};

export const setRandomPlaylist = (data) => {
  return {
    type: ACTION_USER_TYPES.SET_RANDOM_PLAYLIST,
    payload: data,
  };
};

export const fetchData = (login) => async (dispatch) => {
  if (login === true) {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      dispatch(setCurrentUser(result));
    } catch (error) {
      console.error(error);
    }
  }
};

export const fetchClickData = (playListId) => async (dispatch) => {
  const url = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playListId}&offset=0&limit=100`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1f10d97e0dmsheafa04f64a17dc1p1b2e26jsn32b9857451f5",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    dispatch(setClıckPlaylıst(result));
  } catch (error) {
    console.error(error);
  }
};

export const fetchRandomData = () => async (dispatch) => {
  const url =
    "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1f10d97e0dmsheafa04f64a17dc1p1b2e26jsn32b9857451f5",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    dispatch(setRandomPlaylist(result));
  } catch (error) {
    console.error(error);
  }
};
