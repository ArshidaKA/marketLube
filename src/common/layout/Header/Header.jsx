import React from 'react'
import classes from "./Header.module.scss";
import Logo from '../Logo/Logo';
import NavIcons from '../navIcons/NavIcons';
import { IoMenu } from "react-icons/io5";
const Header = () => {
    return (
    <div className={classes.main}>
            <div className={classes.heightCompensator}>
            <div className={classes.warapperRight}>
                <div><Logo /></div>
                <div className={classes.navbarList}>
                    <div>Photo Frames</div>
                    <div>Polaroids</div>
                    <div>Mugs</div>
                    <div>Keychains</div>
                    <idv>Wallet cards</idv>
                </div>
            </div>
            <NavIcons/>

          <IoMenu  className={classes.mobileScreen}/> 
        </div>

    </div>
    )
}

export default Header