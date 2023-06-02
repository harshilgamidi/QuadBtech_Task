import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import MovieIcon from '@material-ui/icons/Movie';
import logo from '../Images/logo.png';

const useStyles = makeStyles((theme) => ({
  navbar: {
    flexGrow: 1,
  },
  navbarLogo: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  menuToggle: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerList: {
    width: 250,
  },
  navbarRight: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  navbarLink: {
    marginLeft: theme.spacing(2),
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={classes.navbar}>
      <AppBar position="sticky">
        <Toolbar>
          <div className={classes.navbarLogo}>
            <img src={logo} alt="Movie Logo" width={100} />
          </div>
          <div className={classes.navbarRight}>
            <IconButton color="inherit" className={classes.navbarLink}>
              <HomeIcon />
            </IconButton>   
          </div>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuToggle}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <div className={classes.drawerList}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Movies" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="TV Shows" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
