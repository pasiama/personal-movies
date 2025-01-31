import {useEffect} from 'react';

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;
const API_OPTION = {
  method: "GET",
  header: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Trending = () => {
  const fetchMovies = async () => {
    try {
      const endpoint = `${API_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTION);
      const data = response.json

      console.log("data", data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
      fetchMovies()
  },);


  return <div>
      <h1>TRENDING MOVIES</h1>
    </div>
  
};
export default Trending;
