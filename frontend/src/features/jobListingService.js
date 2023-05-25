const URL = `http://localhost:3000/api/v1`;

//Get jobs data
export const getJobs = async () => {
  //Make a request
  const response = await fetch(URL);

  //Parse to json
  const { result } = await response.json();

  //return the data
  return result;
};
