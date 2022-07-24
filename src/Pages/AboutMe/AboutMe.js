import './AboutMe.scss'


export default function aboutMe(){
  return(
    <div className='AboutMe'>
      <Profile/>
      <Contact/>
      <Blog/>
      <Maps/>
    </div>
  )
}

function Profile(){
  return(
    <div>
      <div>

      </div>
      <div>
        <span>Inżynier [LinkedIn]</span>
        <span>Designer [Blog]</span>
        <span>Fantasta [Facebook]</span>
        <span>Pracownik [CV]</span>
      </div>

    </div>
  )
}

function Blog(){
  return(
    <div>
      
    </div>
  )
}

function Contact(){
  return(
    <div>
      
    </div>
  )
}

function Maps(){
  return(
    <div>
      
    </div>
  )
}