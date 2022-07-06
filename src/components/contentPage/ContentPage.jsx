import React, {useState} from 'react';
import ColourGame from '../colourGame/ColourGame';
import { Link } from "react-router-dom";
import './ContentPage.css';

const ContentPage = () => {
    // const [ colourGameImageclicked, setColourGameImageclicked] = useState(false);
    // const colourGameClickHandler = () => {
    //     console.log('image is clicked');
    //     setColourGameImageclicked(true);
    // }
    return (
        <>
        <div className='gameNameTextStyle'> Which Game you want to play ??</div>
        <div className="imageStyle">
        <Link to="/colourGame">
        <img 
            className='colourGameStyle'
            alt='Colour game' 
            src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2014/04/18130043/online-gamer-threats-featured.jpg" 
            height='100px' 
            width='150px' 
            // onClick={colourGameClickHandler}
        />
        </Link>
        <Link to="/colourGame">
        <img
            className='colourGameStyle' 
            alt='other game' 
            src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            height='100px' 
            width='150px' 
            // onClick={colourGameClickHandler}
        />
        </Link>
        </div>
        </>
    )
};

export default ContentPage;