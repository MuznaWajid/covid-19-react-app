import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
   position:"",
   bottom:0,
   right:0,
   left:0,
   
  
  },
});

export default function FootNav({Screenconfig}) {
  const classes = useStyles();
  
  // const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={Screenconfig[0]}
      onChange={(event, newValue) => {
          console.log(newValue);
          Screenconfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global State" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country State" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Graph" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
