import React, {useState} from 'react';
import ColourGame from './colourGame/ColourGame';
import AboutPage from './aboutPage/aboutPage';
import ContentPage from './contentPage/ContentPage';


const MainApp = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [contentFlag, setContentFlag] = useState(false);
    const clickTicTacToeHandler = (e) => {
        console.log('tic tac toe is clicked', e);
    }
    const handleAboutPage = () => {
        console.log('click about');
        setShowAbout(true);
        setContentFlag(false);
    }
    const handleContent = () => {
        console.log('game starting');
        setShowAbout(false);
        setContentFlag(true);
    }
  return (
    <div>
        <div className='sidenav'>
            <button onClick={handleAboutPage}>About</button>
            <button onClick={handleContent}>Colour game</button>
            <button>Tic tac toe</button>
            <button>Contact</button>
        </div>
        <div className='contentPageStyle'>
            {showAbout ? <AboutPage />: null}
            {contentFlag? <ContentPage/>: null}
        </div>
    </div>
    
  );
}

export default MainApp;