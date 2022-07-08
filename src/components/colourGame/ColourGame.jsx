import React, {useState, useRef, useEffect} from 'react';
import './ColourGame.css';
import colourCodes from '../../extra/colourCodes.json';
import Confetti from 'react-confetti';

 const ColourGame = () => {
  const [numbers, setNumbers] = useState('');
  const [height, setheight] = useState(null);
  const [width, setWidth] = useState(null);
  const [confetti, setConfetti] = useState(false);
  const confettiRef = useRef(null);

  const inputChangeHandler = (e) => {
    setNumbers(e.target.value);
  }
  const dotClickHandler = () => {
    console.log('divasf is clicked');
    setConfetti(!confetti);
  };
  useEffect(() => {
    setheight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  },[])
  const newColourCodeArr = colourCodes.map((item) => {
    const colour = item.colour;
    const dotStylePart = {
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      borderRadius: '50%',
      height: '100px',
      width: '100px',
      backgroundColor: colour,
      cursor: 'pointer',
    }
    if(item.id <= numbers){
      return (
        <div key={item.id} style={dotStylePart} onClick={dotClickHandler}>{item.colour}</div>
      )
    }
  })
    return (
      <div className='colourGameTextContainer'>
      <div className='confetti-wrap' ref={confettiRef}>
        {confetti ? <Confetti
          width={width}
          height={height}
        /> : ''}
        </div> 
        <div className='numberInputContainer'>
          <div>How many dots you want to play ?</div>
          <input className='inputNumberStyle' type="number" min={1} max={5} onClick={inputChangeHandler} />
        </div>
        <div className='colourCodeContainer'>
          {numbers ? newColourCodeArr : ''}
        </div>
     </div>
    )
 }

 export default ColourGame;