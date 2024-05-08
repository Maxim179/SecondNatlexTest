import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Options from './Options';
import { Link } from 'react-router-dom';

function NavigationMenu() {
  return (
    <AppBar position='static' sx={{backgroundColor:'DarkGreen'}}>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Natlex Test Application
        </Typography>
        <Typography 
          variant='h6'
          component='div' 
          sx={{ flexGrow: 1, '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px' } }}
        >
          <Link to="/Charts" style={{ textDecoration: 'none', color: 'inherit' }}>
            Charts
          </Link>
        </Typography>
        <Typography 
          variant='h6'
          component='div'
          sx={{ flexGrow: 1, '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)', borderRadius: '5px' } }}
        >
          <Link to='/Options' style={{ textDecoration: 'none', color: 'inherit' }}>
            Settings
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationMenu;
