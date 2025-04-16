import React from 'react'
import classes from "./Preview.module.scss"
import Button from '../../../../common/components/Button/Button'
import Compare from '../../../../Components/Compare'

function Preview() {
  return (
    <div className={classes.mainWrapper}>
        <div>
         <div className={classes.title} >
         Design, Preview, Sip<br/>
         Make It Uniquely Yours
                    </div>
                    <div className={classes.subTitle}>
                    Upload your photo and slide to preview how it looks<br/> — make it perfect before you buy!
                    </div>
                    <div className={classes.button}>
                    <Button  text="Upload & preview" variant="primary"/>
                    </div>

                    </div>
                    
                    
                     <Compare/>
                  
    </div>
  )
}

export default Preview
