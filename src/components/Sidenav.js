import { AppBar, Box, styled, Toolbar } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'

const Sidenav = () => {

  const StyledBox = styled('div')({
    display: "flex",
    justifyContent: "space-between",
    position: 'sticky',
    height: '100vh',
    top: 0
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
    }
    } >
      <AppBar position='sticky'>
        <Toolbar >
          <Search>
            <SearchIcon />
            <InputBase placeholder='Search here' />
          </Search>
        </Toolbar>
      </AppBar>
    </StyledBox >

  )
}

export default Sidenav