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
import { useNavigate } from 'react-router';

export default function SiteMap() {

  return (
    <div className='siteMap'>
      <SiteMapList />
      <DownloadCV />

    </div>
  );
}

function DownloadCV() {
  return (
    <div className='IconCV'>
      <Button variant="text" sx={{ color: '#ae2b24', fontSize: 16 }}>
        Pobierz CV
        <PictureAsPdfIcon sx={{ fontSize: 44, paddingLeft: '4px' }} />
      </Button>
    </div>
  )
}

function SiteMapList() {
  const [aboutMeOpen, setAboutMeOpen] = useState(false);
  const [puzzleOpen, setPuzzleOpen] = useState(false);
  const navigator = useNavigate();

  const themeColor = {
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
    ...themeColor,
    typography: {
      fontSize: 26,
      fontWeightRegular: 550,
    },
  });
  const subMenuTheme = createTheme({
    ...themeColor,
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
    <div className='siteMapList'>
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
            <StyledListItemButton key="aboutMe" onClick={() => setAboutMeOpen(!aboutMeOpen)}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="O mnie" />
              {aboutMeOpen ? <ExpandLess /> : <ExpandMore />}
            </StyledListItemButton>
            <Collapse in={aboutMeOpen} timeout="auto" unmountOnExit>
              <ThemeProvider theme={subMenuTheme}>
                <List component="div" disablePadding>
                  <SubStyledListItemButton
                    key="MeetUp"
                    onClick={() => { navigator('/aboutme') }}
                  >
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Poznajmy się" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton key="contact">
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Kontakt" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton key="Geography">
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Geografia" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton key="cv">
                    <ListItemIcon>
                      <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText primary="Podgląd mojego CV" />
                  </SubStyledListItemButton>
                </List>
              </ThemeProvider>
            </Collapse>

            <StyledListItemButton key="puzzle" onClick={() => setPuzzleOpen(!puzzleOpen)}>
              <ListItemIcon>
                <SettingsSuggestIcon />
              </ListItemIcon>
              <ListItemText primary="Prace zebrane" />
              {puzzleOpen ? <ExpandLess /> : <ExpandMore />}
            </StyledListItemButton>
            <Collapse in={puzzleOpen} timeout="auto" unmountOnExit>
              <ThemeProvider theme={subMenuTheme}>
                <List component="div" disablePadding>
                  <SubStyledListItemButton key="Hotels">
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Fake hotel booking" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton key="Insta">
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Better instagram" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton key="Poem">
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Make Poem" />
                  </SubStyledListItemButton>
                  <SubStyledListItemButton key="moreWorks">
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Więcej ciekawych Prac" />
                  </SubStyledListItemButton>
                </List>
              </ThemeProvider>
            </Collapse>

            <StyledListItemButton
              key="LinkedIn"
              href="https://www.linkedin.com/in/maciej-tytko-35a46bb7/recent-activity/shares"
              target="_blank" rel="noopener">
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="Publikacje nt. technologii" />
            </StyledListItemButton>

            <StyledListItemButton
              key="YouTube"
              href="https://youtube.com/playlist?list=PLpY4HpxhyVtNFWrkVfTXmWZvL69ecZQVz"
              target="_blank" rel="noopener">
              <ListItemIcon>
                <YouTubeIcon />
              </ListItemIcon>
              <ListItemText primary="Asix SCADA - kurs online " />
            </StyledListItemButton>

            <StyledListItemButton
              key="Facebook"
              href="https://www.facebook.com/people/Gliwickie-spotkania-RPG/100063789603055"
              target="_blank" rel="noopener"
            >
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText
                primary="Gliwickie Spotkania RPG"
              />
            </StyledListItemButton>


          </List>
        </Box>
      </ThemeProvider>
    </div>
  )
}