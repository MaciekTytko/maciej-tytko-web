import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Kariera</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Laureat olimpiady matematycznej
              Inżynierka - programowanie sterowników PLC i falowników
              Magisterka - Badanie algorytmów aktywnego tłumienia hałasów
              Stażysta - MES
              pracownik - dział SCADA
              pracownik - dział marketingu i konsultacji
              pracownik - Siemens
              pracownik - Peritus MES
            </Typography>
          </AccordionDetails>
        </Accordion>
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
            <Typography variant="h5">Programista na froncie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              C# - skrypty + stacja testowania pomp
              C++ + VCL - harmonogram koksowni
              JS + React - ta strona
              SQL + MS Reporting services - raporty środowiskowe
              Dodatkowo - codingame {/* dodać certyfikaty i ikonki */}
              II miejsce na mistrzostwach Polski w LabView - kategoria pytania do publiczności
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