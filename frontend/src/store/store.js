import { configureStore } from "@reduxjs/toolkit";
import jobListingSliceReducer from "../features/jobListingFeatures";

//Redux Store
const store = configureStore({
  reducer: {
    jobs: jobListingSliceReducer,
  },
});

export default store;
