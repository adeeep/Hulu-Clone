import React, { useEffect, useState } from 'react';
import Videocard from "./Videocard";
import "./Results.css";
import axios from './Axios';
import requests from './requests';
// import requests from './requests';


function Results({selected}) {


    const[movies,setMovies] = useState([])
    
    useEffect(()=>{

    
        async function fetchData() {
             const request= await axios.get(selected)
             console.log(request) 
             setMovies(request.data.results)
             return request;
        }
        fetchData();        
    },[selected]);
    
    return (

        <div className="Results">
            {movies.map((movie)=>
                          <Videocard key={movie.id} movie={movie}/> 
            )}
         
        </div>
    );
            
            };

export default Results;