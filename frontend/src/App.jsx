import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "./features/jobListingFeatures";
import { useEffect } from "react";

function App() {
  //Access store state
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  console.log(jobs);

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
