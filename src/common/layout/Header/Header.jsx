import React, { useState } from 'react'
import classes from "./Header.module.scss";
import Logo from '../Logo/Logo';
import NavIcons from '../navIcons/NavIcons';
import { IoClose, IoMenu } from "react-icons/io5";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

          <IoMenu  className={classes.mobileScreen} onClick={()=>setIsMenuOpen(true)}/> 
          {isMenuOpen && (
        <div className={classes.mobileDrawer}>
          <div className={classes.closeIcon} onClick={() => setIsMenuOpen(false)}>
            <IoClose />
          </div>
          <div className={classes.mobileNav}>
            <div>Photo Frames</div>
            <div>Polaroids</div>
            <div>Mugs</div>
            <div>Keychains</div>
            <div>Wallet cards</div>
          </div>
        </div>
      )}
        </div>

    </div>
    )
}

export default Header