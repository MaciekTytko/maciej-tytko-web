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


let hoverCounter = 0;
function AboutMe() {
  const [hover, setHover] = useState(false);
  const [listShowButton, setListShowButton] = useState({ 0: null, 1: null, 2: null, 3: null })
  const listelements = ["Życiorys", "Moje prace", "Publikacje", "Kontakt"]
  const typeWriterDelay = 40;

  const showList = () => {
    hoverCounter = hoverCounter+1;
    const hoverMutex = hoverCounter;
    console.log(hoverCounter)
    let time = 400;
    setListShowButton({ 0: null, 1: null, 2: null, 3: null });
    setTimeout(() => {
      if(hoverMutex===hoverCounter) setListShowButton({ 0: "Writer", 1: null, 2: null, 3: null });
    }, time)
    setTimeout(() => {
      if(hoverMutex===hoverCounter) setListShowButton({ 0: "Button", 1: "Writer", 2: null, 3: null });
    }, time += listelements[0].length * typeWriterDelay + 600)
    setTimeout(() => {
      if(hoverMutex===hoverCounter) setListShowButton({ 0: "Button", 1: "Button", 2: "Writer", 3: null });
    }, time += listelements[1].length * typeWriterDelay + 600)
    setTimeout(() => {
      if(hoverMutex===hoverCounter) setListShowButton({ 0: "Button", 1: "Button", 2: "Button", 3: "Writer" });
    }, time += listelements[2].length * typeWriterDelay + 600)
    setTimeout(() => {
      if(hoverMutex===hoverCounter) setListShowButton({ 0: "Button", 1: "Button", 2: "Button", 3: "Button" });
    }, time += listelements[3].length * typeWriterDelay + 600)
  }
  const hideList = () => {
    setListShowButton({ 0: null, 1: null, 2: null, 3: null });
  }
  return (
    <div
      className='aboutMe'
      onMouseEnter={() => { setHover(true); showList() }}
      onMouseLeave={() => { setHover(false); hideList() }}
    >
      <div>
        <h2 className='title'>O mnie</h2>
        {hover ? null : <p className='subtitle'>Poznajmy się</p>}
      </div>
      <div className='listElement'>
        {hover
          ? <>
            {listShowButton[0] === "Writer" ? <TypeWriterCustom text={listelements[0]} delay={typeWriterDelay} /> : listShowButton[0] === "Button" ? <div>{listelements[0]}</div> : null}
            {listShowButton[1] === "Writer" ? <TypeWriterCustom text={listelements[1]} delay={typeWriterDelay} /> : listShowButton[1] === "Button" ? <div>{listelements[1]}</div> : null}
            {listShowButton[2] === "Writer" ? <TypeWriterCustom text={listelements[2]} delay={typeWriterDelay} /> : listShowButton[2] === "Button" ? <div>{listelements[2]}</div> : null}
            {listShowButton[3] === "Writer" ? <TypeWriterCustom text={listelements[3]} delay={typeWriterDelay} /> : listShowButton[3] === "Button" ? <div>{listelements[3]}</div> : null}
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
        <h2 className='title'>Puzzle</h2>
        <p className='subtitle'>Zobacz coś ciekawego</p>
      </div>
      <div className='puzzleBox'>
        <ButtonPuzzle />
      </div>
    </div>
  )
}