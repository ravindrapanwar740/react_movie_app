import React from 'react'
import {
    Button,
    createMuiTheme,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";

const SearchMovie = (props) => {
    
    return (
        <div className="search_movie">
<ThemeProvider>
           <TextField
            value={props.value}
             onChange={(event)=>props.setSearchValue(event.target.value)}
            placeholder="🔍Enter movie name...."
            ></TextField>
          </ThemeProvider> 
        </div>
    )
}

export default SearchMovie
