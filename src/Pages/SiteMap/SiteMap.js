// Made by Maciek
// uses tech: MUI List; Styled Item

import './SiteMap.scss';
import React from 'react';
import Box from '@mui/material/Box';
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
import { Button } from '@mui/material';

export default function SiteMap() {
  const [aboutMeOpen, setAboutMeOpen] = useState(true);
  const [puzzleOpen, setPuzzleOpen] = useState(false);

  const textColor = {
    palette: {
      text: {
        primary: '#1181b2',
        secondary: '#26ace2',
      },
      primary: {
        main: '#1181b2',
      }
    },
  }
  const menuTheme = createTheme({
    ...textColor,
    typography: {
      fontSize: 26,
      fontWeightRegular: 550,
    },
  });
  const subMenuTheme = createTheme({
    ...textColor,
    typography: {
      fontSize: 22,
      fontWeightRegular: 550,
    },
  });



  const sxAttributes = (theme) => ({
    borderRadius: 12,
    '&, .MuiListItemIcon-root': {
      color: theme.palette.text.primary,
    },
    ':hover': {
      backgroundColor: theme.palette.text.secondary,
      '&, .MuiListItemIcon-root': {
        color: '#FFFFFF',
      },
    },
  })

  const StyledListItemButton = styled(ListItemButton)(({ theme }) => sxAttributes(theme));
  const SubStyledListItemButton = styled(ListItemButton)(({ theme }) => ({ ...sxAttributes(theme), paddingLeft: 42, }));

  return (
    <div className='siteMap'>
      <ThemeProvider theme={menuTheme}>
        <Box minWidth={240} >
          <List
            sx={{
              width: '100%',
              maxWidth: 560,
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          // subheader={
          //   <ListSubheader
          //     component="div"
          //     id="nested-list-subheader"
          //     color="primary"
          //     sx={{ fontSize: 48, fontWeight: 'Bold', textAlign: 'center' }}
          //   >
          //     MENU
          //   </ListSubheader>
          // }
          >
            <StyledListItemButton onClick={() => setAboutMeOpen(!aboutMeOpen)}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="O mnie" />
              {aboutMeOpen ? <ExpandLess /> : <ExpandMore />}
            </StyledListItemButton>
            <Collapse in={aboutMeOpen} timeout="auto" unmountOnExit>
              <ThemeProvider theme={subMenuTheme}>
                <List component="div" disablePadding>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Poznajmy się" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Kontakt" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Geografia" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText primary="Podgląd mojego CV" />
                  </SubStyledListItemButton>
                </List>
              </ThemeProvider>
            </Collapse>

            <StyledListItemButton onClick={() => setPuzzleOpen(!puzzleOpen)}>
              <ListItemIcon>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary="Prace zebrane" />
              {puzzleOpen ? <ExpandLess /> : <ExpandMore />}
            </StyledListItemButton>
            <Collapse in={puzzleOpen} timeout="auto" unmountOnExit>
              <ThemeProvider theme={subMenuTheme}>
                <List component="div" disablePadding>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Fake hotel booking" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Better instagram" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Make Poem" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Więcej ciekawych Prac" />
                  </SubStyledListItemButton>
                </List>
              </ThemeProvider>
            </Collapse>

            <StyledListItemButton>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="Publikacje nt. technologii" />
            </StyledListItemButton>

            <StyledListItemButton>
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="Asix SCADA - kurs online " />
            </StyledListItemButton>

            <StyledListItemButton>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText primary="Gliwickie Spotkania RPG" />
            </StyledListItemButton>


          </List>
        </Box>
      </ThemeProvider>
      <div className='IconCV'>
        <Button variant="text" sx={{ color: '#ae2b24', fontSize: 16 }}>
          Pobierz CV
          <PictureAsPdfIcon sx={{ fontSize: 44, paddingLeft: '4px' }} />
        </Button>
      </div>
    </div>


  );
}