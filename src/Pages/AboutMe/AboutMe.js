import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AboutMe.scss'


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

function Profile() {
  return (
    <div className='profile'>
      <Box sx={{ width: '100%', maxWidth: 1000 }}>

        <Typography
          variant="h2"
          align="Left"
        >
          O mnie
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Inżynier</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Skończone studia na politechnice

            </Typography>
            <Typography>
              Newsy technologiczne na LinkedIn
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Frontend designer</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Team Leader</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Prezes Ligi Znakomitych Mistrzów Gry</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Typography align='left'>
          Ściągnij CV
        </Typography>

      </Box>
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