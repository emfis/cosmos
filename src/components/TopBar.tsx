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
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar