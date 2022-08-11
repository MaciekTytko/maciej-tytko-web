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
  const [hover, setHover] = useState(false);
  const [listShowButton, setListShowButton] = useState(0)
  const [hoverMutex, setHoverMutex] = useState(0)
  const listelements = ["Życiorys", "Moje prace", "Publikacje", "Kontakt"]
  const typeWriterDelay = 40;

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
        setListShowButton(1+2*(i+1));
      }, time += x.length * typeWriterDelay + 200)
    })
    setTimeout(() => {
      setHoverMutex(false);
    }, time)

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
            {listShowButton > 1 ? <div>{listelements[0]}</div> : listShowButton > 0 ? <TypeWriterCustom text={listelements[0]} delay={typeWriterDelay} /> : null}
            {listShowButton > 3 ? <div>{listelements[1]}</div> : listShowButton > 2 ? <TypeWriterCustom text={listelements[1]} delay={typeWriterDelay} /> : null}
            {listShowButton > 5 ? <div>{listelements[2]}</div> : listShowButton > 4 ? <TypeWriterCustom text={listelements[2]} delay={typeWriterDelay} /> : null}
            {listShowButton > 7 ? <div>{listelements[3]}</div> : listShowButton > 6 ? <TypeWriterCustom text={listelements[3]} delay={typeWriterDelay} /> : null}
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