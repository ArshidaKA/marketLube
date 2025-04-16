import React, { useState } from 'react';
import Button from '../../../../common/components/Button/Button';
import classes from './Products.module.scss';
import { data } from '../../../../data';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const categories = ['Photo frames', 'Polaroids', 'Mugs', 'Key chains', 'Wallet cards'];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Photo frames');

  const filteredData = data.filter(item => item.category === selectedCategory);

  return (
    <div className={classes.main}>
      <div className={classes.mainHead}>
        <div className={classes.subTitle}>Shop by category</div>

        <div className={classes.title}>
          <h1>
            Find your style,{' '}
            <span className={classes.styledFont}>Make It Yours!</span>
          </h1>
        </div>

        <div className={classes.buttonStyle}>
          {categories.map((category) => (
            <Button
              key={category}
              text={category}
              variant="category"
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>
      </div>

      <div className={classes.productsGrid}>
        {filteredData.map((item, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              ref={ref}
              key={item.id}
              className={classes.productCard}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={item.img} alt={item.name} className={classes.productImage} />
              <div className={classes.productName}>{item.name}</div>
              <div className={classes.priceRow}>
                <span className={classes.price}>₹{item.price}</span>
                {item.original_price&&<span className={classes.originalPrice}>₹{item?.original_price}</span>}
               {item.offer && <span className={classes.offer}>{item?.offer}</span>}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className={classes.exploreButton}>
        <Button text="Explore all" variant="outline" />
      </div>
    </div>
  );
}

export default Products;
