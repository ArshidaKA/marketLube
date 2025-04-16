import React from 'react'
import Landing from './Sections/Landing'
import ImageCarousel from './Sections/ImageCarousel/ImageCarousel'
import Products from './Sections/Products/Products'
import Preview from './Sections/Preview/Preview'



const Hero = () => {
  return (
    <div>
<Landing/>  
<ImageCarousel/>
<Products/>
<Preview/>
  </div>
  )
}

export default Hero