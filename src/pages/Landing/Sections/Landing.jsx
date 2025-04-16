import React from 'react'
import classes from "./Landing.module.scss";
import Button from '../../../common/components/Button/Button';
const Landing = () => {
  return (
    <div className={classes.topComponents}>
       <div className={classes.mainWrapper}>
       <img className={classes.image} src='main.png'/>
        <div className=''>
            <div className={classes.title}>
            Celebrate every moment<br/> with frames that beautifully <br/>tell your story
            </div>
            <div className={classes.subTitle}>
            Find the perfect frame to make your favorite photos stand out and add a touch of style to your home
            </div>
            <div className={classes.alignButton}>
              <Button  text="Shop Frames" variant="primary"/>
              <Button text="Customize Now" variant="outline" />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Landing