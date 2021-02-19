import * as React from "react";
import { Link } from "react-router-dom"
import { AppBar,Toolbar, IconButton, Typography, Menu , MenuItem, makeStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

//except for styling material ui seems legit
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface TopBarProps {
  title: string;
}

const TopBar: React.FC<TopBarProps> = ({title}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();

  function handleOpen (event) {
    setAnchorEl(event.currentTarget);
  };

  function handleClose () {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          edge="start"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          keepMounted
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <MenuItem  onClick={handleClose}>
            <Link to={"/"}>Cosmic Image</Link>
          </MenuItem>
          <MenuItem  onClick={handleClose}>
            <Link to={"/map"}>Map Search</Link>
          </MenuItem>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar