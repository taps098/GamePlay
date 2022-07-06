import React, {useState} from 'react';
import { Link } from "react-router-dom";

const MainApp = () => {
  return (
    <div>
        <nav className='sidenav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/game">Games</Link>
        </nav>
    </div>
  );
}

export default MainApp;