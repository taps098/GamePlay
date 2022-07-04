import React, {useState} from 'react';
import ColourGame from '../colourGame/ColourGame';
import './ContentPage.css';

const ContentPage = () => {
    // const [showColourGame, setShowColourGame] = useState(false);
    const [ colourGameImageclicked, setColourGameImageclicked] = useState(false);
    const imageClickHandler = () => {
        console.log('image is clicked');
        setColourGameImageclicked(true);
    }
    return (
        <>
        <div> Which Game you want to play ??</div>
        <div className="imageStyle">
        <img 
            className='colourGameStyle'
            alt='Colour game' 
            src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2014/04/18130043/online-gamer-threats-featured.jpg" 
            height='100px' 
            width='150px' 
            onClick={imageClickHandler}
        />
        <img
            className='colourGameStyle' 
            alt='other game' 
            src="https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
            height='100px' 
            width='150px' 
            onClick={imageClickHandler}
        />
        </div>
        {colourGameImageclicked ? <ColourGame /> : ''}
        </>
    )
};

export default ContentPage;