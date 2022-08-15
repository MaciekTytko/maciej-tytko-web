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

export default function SiteMap() {
  const [open, setOpen] = useState(false);




  return (
    <div className='siteMap'>
      <Box minWidth={240}>
        <List
          sx={{ width: '100%', maxWidth: 400, bgcolor: 'bisque' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ bgcolor: 'bisque' }}
            >
              MENU
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="O mnie" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>

          <ListItemButton>
            <ListItemIcon>
              <SettingsSuggestIcon />
            </ListItemIcon>
            <ListItemText primary="Prace zebrane" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
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

          <ListItemButton>
            <ListItemIcon>
              <PictureAsPdfIcon />
            </ListItemIcon>
            <ListItemText primary="Podgląd mojego CV" />
          </ListItemButton>

        </List>
      </Box>
    </div>
  );
}