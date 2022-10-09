import { AppBar, styled, Toolbar } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'
import ListItems from './ListItems';

const Sidenav = () => {

  const StyledBox = styled('div')({
    display: "flex",
    backgroundColor: '#2B4865',
    position: 'sticky',
    height: '100vh',
    top: 0,
    flexDirection: 'column'
  })
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: 'gray'
  }))

  return (
    <StyledBox flex={1} sx={{
      width: 300,
    }} >
      <AppBar position='sticky' sx={{ backgroundColor: '#0F3460' }}>
        <Toolbar >
          <Search>
            <SearchIcon sx={{ display: { xs: 'none', sm: 'block' } }} />
            <InputBase placeholder='Search here...' />
          </Search>
        </Toolbar>
      </AppBar>
      <ListItems />
    </StyledBox >

  )
}

export default Sidenav