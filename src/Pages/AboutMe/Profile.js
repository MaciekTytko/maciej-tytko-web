import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Career from './Career';
import Programmer from './Programmer';

export default function Profile() {

  return (
    <div className='profile'>
      <Box sx={{ width: '100%', maxWidth: 1000 }}>

        <Typography
          variant="h2"
          align="Left"
        >
          O mnie
        </Typography>

        <Box sx={{ backgroundColor: 'white', pb:'1rem' }}>
          <Typography variant="h3">Kariera</Typography>
          <Career />
        </Box>

        <Box sx={{ backgroundColor: '#eee', mt: '2rem' }}>
          <Typography variant="h3">Programista na froncie</Typography>
          <Programmer />
        </Box>

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
            <Typography variant="h5">Team Leader</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Prezes stowarzyszenia Liga ZMG
              Szkolenia managerskie
              wyszkolenie 5 studentów - peritus Poznań
              Harmonogram koksowni - 3 developerów
              Modernizacja w Rybniku
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Edukator</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Warsztaty RPG
              Szkolenia z Asixa - YouTube
              Tłumaczę gry planszowe
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Sprzedawca i konsultant</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sprzedaż - Portal
              Logstor
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Typography align='left'>
          Ściągnij CV
        </Typography>
        <Typography align='left'>
          Kariera
        </Typography>
        <Typography align='left'>
          Gallup + strength finder
        </Typography>
      </Box>
    </div>
  )
}