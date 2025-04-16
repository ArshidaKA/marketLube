import React from 'react';
import classes from "./NavIcons.module.scss";

const NavIcons = () => {
  return (
    <div className={classes.icons}>
      <img className={classes.iconsImage} src='icons/wishlist.png' />
      <img className={classes.iconsImage} src='icons/search.png' />


      
      <div className={classes.bucketWrapper}>
        <img className={classes.bucketImage} src='icons/buket.png' />
        <img className={classes.topRightIcon} src='icons/image.png' />
      </div>
    </div>
  );
};

export default NavIcons;
