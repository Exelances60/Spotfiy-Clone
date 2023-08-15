import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_USER_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUserData: {},
  userLogin: false,
  userClickPlaylist: [{}],
  currentClickPlaylist: {},
  audio: "",
  randomPlaylist: {},
  activeUserProfile: false,
};

export const fetchData = createAsyncThunk("fetchData/Login", async (login) => {
  const url =
    "https://spotify23.p.rapidapi.com/user_profile/?id=iq46bg4tmps85e8o7jfxi8j10&playlistLimit=10&artistLimit=10";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1f10d97e0dmsheafa04f64a17dc1p1b2e26jsn32b9857451f5",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  if (login === true) {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  }
});
export const fetchClickData = createAsyncThunk(
  "fetchData/ClickData",
  async (playListId) => {
    const url = `https://spotify23.p.rapidapi.com/playlist_tracks/?id=${playListId}&offset=0&limit=100`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1f10d97e0dmsheafa04f64a17dc1p1b2e26jsn32b9857451f5",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  }
);
export const fetchRandomData = createAsyncThunk(
  "fetchData/RandomData",
  async () => {
    const url =
      "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1f10d97e0dmsheafa04f64a17dc1p1b2e26jsn32b9857451f5",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUserData = action.payload;
    },
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    setClıckPlaylıst: (state, action) => {
      state.userClickPlaylist = action.payload;
    },
    setCurrentClickPlaylist: (state, action) => {
      state.currentClickPlaylist = action.payload;
    },
    setAudio: (state, action) => {
      state.audio = action.payload;
    },
    setRandomPlaylist: (state, action) => {
      state.randomPlaylist = action.payload;
    },
    setActiveUserProfile: (state, action) => {
      state.activeUserProfile = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.currentUserData = action.payload;
      })
      .addCase(fetchClickData.fulfilled, (state, action) => {
        state.userClickPlaylist = action.payload;
      })
      .addCase(fetchRandomData.fulfilled, (state, action) => {
        state.randomPlaylist = action.payload;
      });
  },
});

export const {
  setCurrentUser,
  setUserLogin,
  setClıckPlaylıst,
  setCurrentClickPlaylist,
  setAudio,
  setRandomPlaylist,
  setActiveUserProfile,
} = userSlice.actions;

export const userReducer = userSlice.reducer;

/* export const userReducer = (state = INITIAL_STATE, action) => {
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
 */
