import React from "react";
import classes from './Topbar.module.css';


const Topbar=(props)=>{
    return(
        <header>
        <nav className={classes.Topbar}>
          <img src="./image/download.jfif" alt="Bazar logo" />
        </nav>
        </header>
    )
}

export default Topbar;