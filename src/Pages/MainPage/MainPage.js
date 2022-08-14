import ButtonPuzzle from '../../Components/Buttons/ButtonPuzzle/ButtonPuzzle';
import './MainPage.scss'
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function MainPage() {
  return (
    <div className='mainPage'>
      <div className='halfView'><AboutMe /></div>
      <div className='halfView'><Puzzle /></div>
    </div>
  );
}



function AboutMe() {
  const [hover, setHover] = useState(false);
  const [listShowButton, setListShowButton] = useState(0)
  const [hoverMutex, setHoverMutex] = useState(0)
  const listelements = ["Życiorys", "Moje prace", "Publikacje", "Kontakt"]
  const typeWriterDelay = 35;

  const showList = () => {
    if (hoverMutex) { console.log('return on hoveMutex'); return };
    setHoverMutex(true);
    console.log('hoveMutex true')
    let time = 400;
    setListShowButton(0);
    setTimeout(() => {
      setListShowButton(1);
    }, time)
    listelements.map((x, i) => {
      setTimeout(() => {
        setListShowButton(1 + 2 * (i + 1));
      }, time += x.length * typeWriterDelay + 350)
    })
    setTimeout(() => {
      setHoverMutex(false);
    }, time + 300)

  }
  return (
    <div
      className='aboutMe'
      onMouseEnter={() => { setHover(true); showList() }}
    >
      <div>
        <h2 className='title'>O mnie</h2>
        {hover ? null : <p className='subtitle'>Poznajmy się</p>}
      </div>
      <div className='listElement'>
        {hover
          ? <>
            {listelements.map((element, i) => {
              if (listShowButton > i * 2 + 1) {
                return <div>{element}</div>;
              } else if (listShowButton > i * 2) {
                return <TypeWriterCustom text={element} delay={typeWriterDelay} />;
              }
            })}
          </>
          : null
        }
      </div>
    </div>
  )
}

function TypeWriterCustom(props) {
  return (
    <Typewriter
      options={{
        delay: props.delay
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(props.text)
          .start();
      }} />
  )
}

function Puzzle() {
  return (
    <div className='puzzle'>
      <div>
        <h2 className='title'>Prace</h2>
        <p className='subtitle'>Zobacz coś ciekawego</p>
      </div>
      <div className='puzzleBox'>
        <ButtonPuzzle />
      </div>
    </div>
  )
}