import React from 'react';
import "./Videocard.css";
// import { Results } from "Results";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

const Videocard = ({movie}) => {
    return (
        <div className="Video">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path|| movie.poster_path}`} 
              alt="" />
              {/* <TextTruncate line={2} element="p" truncateText="..." text="{movie.overview}"/> */}
              <h3>{movie.title || movie.original_name}</h3>
              <p className="Video_stats">
                  {movie.media_type}
                  {movie.release_date}
                 <ThumbUpSharpIcon />{" "} {movie.vote_count}</p>
        </div>
    );
};

export default Videocard;