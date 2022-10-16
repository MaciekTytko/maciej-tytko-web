import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AboutMe.scss'


export default function aboutMe() {
  return (
    <div className='aboutMe'>
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
      <Box  sx={{ width: '100%', maxWidth: 1000 }}>
        <Typography
          variant="h1"
          gutterBottom
          align="center"
        >
          Maciej Tytko
        </Typography>
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
            <Typography variant="h5">Designer</Typography>
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
            <Typography variant="h5">Prezes Ligi Znakkomitych Mistrzów Gry</Typography>
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
            <Typography variant="h5">Dobry pracownik</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ściągnij CV
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  )
}

function Blog() {
  return (
    <div>
      Blog
    </div>
  )
}

function Contact() {
  return (
    <div>
      Kontakt
    </div>
  )
}

function Maps() {
  return (
    <div>
      Mapa
    </div>
  )
}