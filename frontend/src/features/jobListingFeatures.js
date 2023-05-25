import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs } from "./jobListingService";

//Async Action Creator
export const fetchJobs = createAsyncThunk(
  "jobListing/fetchJobs",
  async (thunkAPI) => {
    //Call getJob to request data
    const jobs = await getJobs();

    //Return the response data
    return jobs;
  }
);

//Initial State
const initialState = {
  jobListings: [],
  int: 0,
};

//Redux Store Slice
const jobListingSlice = createSlice({
  name: "jobListing",
  initialState,
  reducers: {
    increment: (state) => {
      state.int += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      //Set the state with the action payload
      state.jobListings = action.payload;
    });
  },
});

export default jobListingSlice.reducer;
