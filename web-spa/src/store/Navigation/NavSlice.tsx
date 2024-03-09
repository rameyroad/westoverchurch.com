import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSiteMap } from 'services/contentApi';
import { SiteMapItem } from 'types/navigation/siteMapItem';

// First, create the thunk
export const fetchSiteMap = createAsyncThunk(
  'navigation/sitemap',
  async (siteName: string) => {
    const siteMap = await getSiteMap(siteName);
    console.log('siteMap', siteMap);
    return siteMap as Array<SiteMapItem>;
  },
);

export const NavSlice = createSlice({
  name: 'NavSlice',
  initialState: {
    showNewBlockDrawer: false,
    siteMap: [] as Array<SiteMapItem>,
    parentBlockId: '',
    previousBlockId: '',
    isLoading: false,
  },
  reducers: {
    setShowNewBlockDrawer(state, action: PayloadAction<boolean>) {
      state.showNewBlockDrawer = action.payload;
    },
    setParentBlockId(state, action: PayloadAction<string>) {
      state.parentBlockId = action.payload;
    },
    setPreviousBlockId(state, action: PayloadAction<string>) {
      state.previousBlockId = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSiteMap.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSiteMap.fulfilled, (state, action) => {
      // Add user to the state array
      state.siteMap = action.payload as Array<SiteMapItem>;
      state.isLoading = false;
    });
    builder.addCase(fetchSiteMap.rejected, (state) => {
      state.siteMap = [] as Array<SiteMapItem>;
      state.isLoading = false;
    });
  },
});

export const {
  setShowNewBlockDrawer,
  setParentBlockId,
  setPreviousBlockId,
  setIsLoading,
} = NavSlice.actions;

export default NavSlice.reducer;
