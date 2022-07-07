import { createSlice } from "@reduxjs/toolkit";

type loadingType = boolean;
export type cafeType = {
  id: number;
  name: string;
  img: string;
  content: string;
};
type iState = {
  joinCafe: {
    loading: loadingType;
    joinCafeList: cafeType[];
    err: boolean;
  };
  notJoinCafe: {
    loading: loadingType;
    notJoinCafeList: cafeType[];
    err: boolean;
  };
};

const initialState: iState = {
  joinCafe: {
    loading: false,
    joinCafeList: [],
    err: false,
  },
  notJoinCafe: {
    loading: false,
    notJoinCafeList: [],
    err: false,
  },
};
export const cafeSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {
    getCafeList: (state) => {
      state.joinCafe.err = false;
      state.joinCafe.loading = true;
      state.joinCafe.joinCafeList = [];
      state.notJoinCafe.err = false;
      state.notJoinCafe.loading = true;
      state.notJoinCafe.notJoinCafeList = [];
    },
    getCafeListSussecc: (state, actions) => {
      state.joinCafe.err = false;
      state.joinCafe.loading = false;
      state.joinCafe.joinCafeList = actions.payload.registeredCafe;
      state.notJoinCafe.err = false;
      state.notJoinCafe.loading = false;
      state.notJoinCafe.notJoinCafeList = actions.payload.unregisteredCafe;
    },
    getCafeListFail: (state) => {
      state.joinCafe.loading = false;
      state.joinCafe.err = true;
      state.notJoinCafe.loading = false;
      state.notJoinCafe.err = true;
    },
  },
});
export const { getCafeList, getCafeListFail, getCafeListSussecc } = cafeSlice.actions;
export default cafeSlice.reducer;
