import ButtonPuzzle from '../../Components/Buttons/ButtonPuzzle/ButtonPuzzle';
import './MainPage.scss'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function MainPage() {
  return (
    <div className='mainPage'>
      <div className='halfView'><AboutMe /></div>
      <div className='halfView'><Puzzle /></div>
    </div>
  );
}

function AboutMe() {
  

  return (
    <div className='aboutMe'>
      <div>
        <h2 className='title'>O mnie</h2>
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .start();
          }}
        /> */}
        <p className='subtitle'>Poznajmy się</p>
      </div>
      <div>
        <p className='listElement'>Życiorys</p>
        <p className='listElement'>Moje prace</p>
        <p className='listElement'>Publikacje</p>
        <p className='listElement'>Kontakt</p>
      </div>
    </div>
  )
}

function Puzzle() {
  return (
    <div className='puzzle'>
      <div>
        <h2 className='title'>Puzzle</h2>
        <p className='subtitle'>Zobacz coś ciekawego</p>
      </div>
      <div className='puzzleBox'>
        <ButtonPuzzle />
      </div>
    </div>
  )
}