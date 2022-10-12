import './SiteMap.scss';
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { purple, green, blue } from '@mui/material/colors';
import { Button, ListItem } from '@mui/material';

export default function SiteMap() {
  const [aboutMeOpen, setAboutMeOpen] = useState(true);
  const [puzzleOpen, setPuzzleOpen] = useState(false);

  const menuTheme = createTheme({
    typography: {
      fontSize: 18,
    },
    palette: {
      type: 'light',
      primary: {
        main: '#000000'
      },
      background: {
        default: '#f4f4f9',
        paper: '#00FF00',
      },
      text: {
        primary: '#00FF00',
        secondary: '#FFFF00',
      },
    },

  });
  const subpointSX = {
    pl: 4,
    "&:hover": { color: "purple"}
  }

  return (
    <ThemeProvider theme={menuTheme}>
      <div className='siteMap'>
        <Box minWidth={240} sx={{ bgcolor: 'background.paper' }} >
          <List
            sx={{ width: '100%', maxWidth: 400 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ fontSize: 48, fontWeight: 'Bold', textAlign: 'center' }}
              >
                MENU
              </ListSubheader>
            }
          >
            <ListItemButton onClick={() => setAboutMeOpen(!aboutMeOpen)}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="O mnie" />
              {aboutMeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={aboutMeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Poznajmy się" />
                </ListItemButton>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Kontakt" />
                </ListItemButton>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Geografia" />
                </ListItemButton>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <PictureAsPdfIcon />
                  </ListItemIcon>
                  <ListItemText primary="Podgląd mojego CV" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton onClick={() => setPuzzleOpen(!puzzleOpen)}>
              <ListItemIcon>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary="Prace zebrane" />
              {puzzleOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={puzzleOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Fake hotel booking" />
                </ListItemButton>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Better instagram" />
                </ListItemButton>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Make Poem" />
                </ListItemButton>
                <ListItemButton sx={subpointSX}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Więcej ciekawych Prac" />
                </ListItemButton>
              </List>
            </Collapse>

            <ListItemButton>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn (Publikacje nt. technologii)" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="YouTube (Kurs online Asix SCADA)" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="Gliwickie Spotkania RPG" />
            </ListItemButton>


          </List>
        </Box>
        <div className='IconCV'>
          <Button variant="text" color="primary" sx={{ fontSize: 30 }}>
            Pobierz CV
            <PictureAsPdfIcon color="cv" sx={{ fontSize: 40, paddingLeft: '10px' }} />
          </Button>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </ThemeProvider>
  );
}