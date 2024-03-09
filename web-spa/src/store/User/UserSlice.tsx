import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState: {
    apiStatus: {} as any,
    currentPageData: {} as any,
    userProfile: {} as any,
    loading: false as boolean,
  },
  reducers: {
    setApiStatus(state, action: PayloadAction<any>) {
      state.apiStatus = action.payload;
    },
    setCurrentPageData(state, action: PayloadAction<any>) {
      state.currentPageData = action.payload;
    },
    setUserProfile(state, action: PayloadAction<any>) {
      state.userProfile = action.payload;
    },
  },
});

export const { setApiStatus, setCurrentPageData, setUserProfile } =
  UserSlice.actions;

export default UserSlice.reducer;
