import { useEffect } from 'react';
import { preLoaderAnim } from '../../animations';
// import { motion } from 'framer-motion'

import './preloader.scss';

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.35,
//     },
//   },
// }
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
  // <AnimateEl>
    <div className="preloader">
      <div className="texts-container">
        <span>Cinéaste,</span>
        <span>Director,</span>
        <span>Motion Designer.</span>
      </div>

      <div class="lightCyan-slider"></div>
      <div class="persianGreen-slider"></div>
      <div class="white-slider"></div>
    </div>
    // </AnimateEl>
  );
};

export default PreLoader;
