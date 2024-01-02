import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, } from '@mui/material'
import React from 'react'
import { AccountBox, Group, Home, ModeNight, Person, Settings, Storefront, } from '@mui/icons-material';
import ArticleIcon from '@mui/icons-material/Article';


const Sidebar = ({mode,setMode}) => {
  return (
    <Box bgcolor=""  flex={1} p={2}
     sx={{display: {xs: "none", sm: "block"}}}
     >
    <Box position="fixed">

      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#page'>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#groups'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#marketplace'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#friends'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Settings'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onClick={e=>setMode(mode === "light" ? "dark" : "light")}/>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Sidebar