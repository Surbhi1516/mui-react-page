import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'

const ListItems = () => {
  return (
    <Box p={1}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#home' sx={{}}>
            <ListItemIcon>
              <HomeIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Homepage" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <GroupIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Friends" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <InboxIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Messages" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <ThumbUpAltIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Liked Pages" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding sx={{}}>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <GroupsIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Your Groups" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <AccountCircleIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="My Profile" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <SettingsSuggestIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component='a' href='#home'>
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#EEEEEE' }} />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: '#EEEEEE', display: { xs: 'none', sm: 'block' } }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default ListItems