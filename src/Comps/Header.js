import React from 'react';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import "./Header.css";
import "./App.css";



const Header = () => {
    return (
        <div className="header" >
        <div className="icons">
            
         <div className="icon">
            <HomeIcon />
            <p>Home</p>
            </div>
      
        <div className="icon">
            <VideoLibraryIcon />
            <p>Video</p>
            </div>
       
        <div className="icon">
            <FlashOnIcon />
            <p>Flash</p>
            </div>
           
        <div className="icon">
            <LiveTvIcon />
            <p>Verified</p>
            </div> 
          
        <div className="icon">
            <SearchIcon />
            <p>Search</p>
            </div>
        
        <div className="icon">
            <PersonOutlineOutlinedIcon />
            <p>Account </p>
           
            </div>
            </div>
           
             </div>
    );
};

export default Header;