import React from 'react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css';
import { motion } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { data } from '../../../../data';
import classes from './ImageCarousel.module.scss';

const stats = [
  { value: '10k+', label: 'Frames delivered with love' },
  { value: '1000+', label: 'Unique styles available' },
  { value: '24/7', label: 'Support for your frame need' },
  { value: '30 Days', label: 'Easy, hassle-free returns' },
];

const splideOptions = {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 4,
  gap: '1rem',
  autoScroll: {
    speed: 2,
  },
  pagination: false,
  breakpoints: {
    1024: { perPage: 2 },
    640: { perPage: 1 },
  },
};

const ImageCarousel = () => (
  <div>
    <div className={classes.details}>
      {stats.map((stat, i) => (
        <div key={i}>
          <h1>{stat.value}</h1>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>

    <div className={classes.main}>
      <Splide options={splideOptions} extensions={{ AutoScroll }}>
        {data.slice(0, 8).map(({ id, img, name }, index) => (
          <SplideSlide key={id}>
            <motion.img
              src={img}
              alt={name || 'Carousel item'}
              className={`${classes.image} ${index % 2 !== 0 ? classes.lowerImage : ''}`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  </div>
);

export default ImageCarousel;
