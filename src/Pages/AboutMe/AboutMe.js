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
        <span>Inżynier [Blog]</span>
        <span>Inżynier [Facebook]</span>
        <span>Inżynier [CV]</span>
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