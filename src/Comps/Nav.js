import React from 'react';
import "./Nav.css";
import requests from './requests';

const Nav = ({seSelected}) => {
    return (
        <div className="nav">
         <h5 onClick={()=>seSelected(requests.fetchTrending)}>Trending</h5>
         <h5 onClick={()=>seSelected(requests.fetchTopRated)}>Top rated</h5>
         <h5 onClick={()=>seSelected(requests.fetchActionMovies)}>Action</h5>
         <h5 onClick={()=>seSelected(requests.fetchComedyMovies)}>Comedy</h5>
         <h5 onClick={()=>seSelected(requests.fetchHorrorMovies)}>Horrot</h5>
         <h5 onClick={()=>seSelected(requests.fetchRomanceMovies)}>Romance</h5>
         <h5 onClick={()=>seSelected(requests.fetchMystery)}>Mystery</h5>
         <h5 onClick={()=>seSelected(requests.fetchSciFi)}>Sci-fi</h5>
         <h5 onClick={()=>seSelected(requests.fetchHorrorWestern)}>Western Animation</h5>
         {/* <h5 onClick={()=>seSelected(requests.fetch)}>TV Movie</h5> */}
        </div>
    );
};

export default Nav;