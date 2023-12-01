import {useEffect, useState}  from "react";
import './MoviesApp.css'
import OpeningPage from "./OpeningPage";
import SearchIcon from './search.svg'
import MovieCard  from "./MovieCard";


const API_URL = "http://omdbapi.com?apikey=56b1dc44";

const MoviesApp = ()=>{

    //State for updating movies
    const [movies,setMovies] = useState([]);

    //State for search
    const [searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    {useEffect(()=>
    {
        
    },[])};

    return(
        <div className="App">
            <h1>MoviesHub</h1>
            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e)=>{setSearchTerm(e.target.value )}}>
                </input>
                <img src={SearchIcon}
                alt = "search"
                onClick={()=>{searchMovies(searchTerm)}}>
                </img>
            </div>
            {
                    searchTerm == '' ? (

                        <div className="opening-page">
                            <OpeningPage/>
                        </div>
                        
                    ): 
                    (movies!=null && movies.length>0) ?
                            (
                                <div className="container">
                                    {
                                        movies.map((movie) => 
                                            (
                                                <MovieCard movie={movie} />
                                            )
                                        )
                                    }
                                </div>
                            ) :
                            (
                                <div className="empty">
                                    <h2>No Movies found </h2>
                                </div>
                            )  
            }   
            </div>
    )
}

export default MoviesApp;