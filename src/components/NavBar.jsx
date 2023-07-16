import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Button color="inherit" to='/add' component={Link}>Add</Button>
        <Button color="inherit">View</Button>
        <Button color="inherit" >Home</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
