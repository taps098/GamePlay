import React, {useState} from 'react';
import { Link } from "react-router-dom";
import instaLogo from '../extra/assets/instaLogo.png';

const MainApp = ({toggle, toggleButtonClickHandler}) => {
  return (
    <div className={!toggle ? 'sidenav' : 'sideNavClosed'}>
        {!toggle ? (<div>
            <div className='logoStyleArea'>
            <img className = 'logoStyle' src={instaLogo} alt='game logo' />
            <div className='toggleButtonStyle' onClick={toggleButtonClickHandler}>
            <i class="bi bi-arrow-left-circle"></i>
            </div>
        </div>
        <div className='searchStyleDiv'>
            <input className='serchInputStyle' type="text" />
            <div className='searchButton'>
            <i class="bi bi-search"></i>
            </div>
        </div>
        <nav>
            <Link to="/"><i class="bi bi-house"></i> Home</Link>
            <Link to="/about"><i class="bi bi-file-earmark-person"></i> About</Link>
            <Link to="/game"><i class="bi bi-controller"></i> Games</Link>
        </nav>
        </div>) : 
        (<div>
            <div className='logoStyleArea'>
            <img className = 'logoStyle' src={instaLogo} alt='game logo' />
            <div className='toggleButtonStyle' onClick={toggleButtonClickHandler}>
            <i class="bi bi-arrow-right-circle"></i>
            </div>
        </div>
        <nav>
            <Link to="/"><i class="bi bi-house"></i></Link>
            <Link to="/about"><i class="bi bi-file-earmark-person"></i></Link>
            <Link to="/game"><i class="bi bi-controller"></i></Link>
        </nav>
            </div>)}
    </div>
  );
}

export default MainApp;