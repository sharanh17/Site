import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { CiSearch } from "react-icons/ci";
import './Navbar.css'

function ResponsiveAppBar() {
  return (
    <AppBar position="static"  elevation={0}  sx={{ backgroundColor: '#FFFEF2', color: '#333333',padding: '8px 0px 8px 0px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
            <Button color="inherit">Shop</Button>
            <Button color="inherit">Body & Hand</Button>
            <Button color="inherit">Hair</Button>
            <Button color="inherit">Fragrance</Button>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Kits & Travel</Button>
            <Button color="inherit">Gifts</Button>
            <Button color="inherit">Read</Button>
            <Button color="inherit">Stores</Button>
            <Button color="inherit">Facial Appointments</Button>
            <Button color="inherit" className='butt'><CiSearch size={25}/></Button>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'block', lg: 'none' } }}>
            <Button color="inherit">Shop</Button>
            <Button color="inherit">Read</Button>
            <Button color="inherit">Stores</Button>
            <Button color="inherit" className='butt'><CiSearch size={25}/></Button>
          </Box>
          <Box sx={{ ml: 'auto' }}>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Cabinet</Button>
            <Button color="inherit">Cart</Button>
          </Box>
        </Toolbar>
      </Container>
   
    </AppBar>
  );
}

export default ResponsiveAppBar;
