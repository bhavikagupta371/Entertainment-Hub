import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{backgroundColor:"black",
             width:"100%", position:"fixed",
             bottom:0,
             zIndex:100,
             }}>
      <BottomNavigation sx={   {backgroundColor:"#1a237e"}  }
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
        component={Link}
        to="/"
        style ={{color:"white"}}  label="trending" icon={<WhatshotIcon />} />
    
        
        <BottomNavigationAction 
        component={Link}
        to="/movies"
        style ={{color:"white"}} label="Movies" icon={<MovieIcon />} />
        
        
        <BottomNavigationAction 
        component={Link}
        to="/series"
        style ={{color:"white"}}label="TV series" icon={<TvIcon />} />
        
        
        <BottomNavigationAction 
        component={Link}
        to="/search"
        style ={{color:"white"}}label="Search" icon={<SearchIcon />} />
        
      </BottomNavigation>
      
    </Box>
  );
}
