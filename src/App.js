import "./App.css";
import Home from "./components/List";
import React, { useState, useEffect } from "react";
import SearchMovie from "./components/SearchMovie";
import { Header } from "./components/Header";
import Trail from "./components/Trail";
import Currency from "./API_Testing/Currency";
import News_With_Date from "./API_Testing/News_With_Date";
//import App1 from "./components/Navbar";
//import SimpleBottomNavigation from "./components/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //
  const getMovieRequest = async (searchValue) => {
    //
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

   //  const url = "http://www.omdbapi.com/?s=iron man&apikey=263d22d8";
  //const url="https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    //
    getMovieRequest(searchValue);
    //
  }, [searchValue]);





  return (
    // <div className="app"> 
    <div>
        {/* <Header /> */}
  
       
      {/* <SearchMovie searchValue={searchValue} setSearchValue={setSearchValue} />
    
      <div className="row">
        <Home movies={movies} />
      </div>  */}


{/* <Trail /> */}
{/* <Currency /> */}
<News_With_Date />

    </div>
  );
}

export default App;
