import { Box, Typography } from '@mui/material'
import './AboutMe.scss'
import Profile from './Profile';


export default function aboutMe() {
  return (
    <div className='aboutMe'>
      <Typography
        variant="h1"
        gutterBottom
        align="center"
      >
        Maciej Tytko
      </Typography>
      <Profile />
      <Contact />
      <Blog />
      <Maps />
    </div>
  )
}

function Blog() {
  return (
    <Box sx={{ width: '100%', maxWidth: 1000 }}>
      <Typography
        variant="h2"
        align="Left"
      >
        Blog
      </Typography>
    </Box>
  )
}

function Contact() {
  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <Typography
          variant="h2"
          align="Left"
        >
          Kontakt
        </Typography>
      </Box>
    </div>
  )
}

function Maps() {
  return (
    <div>
      <Box sx={{ width: '100%', maxWidth: 1000 }}>
        <Typography
          variant="h2"
          align="Left"
        >
          Gdzie mnie znaleźć
        </Typography>
      </Box>
    </div>
  )
}