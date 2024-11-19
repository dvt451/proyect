// ScrollbarColorHOC.js

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollbarColorHOC = ({ children }) => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
   // Update the CSS variable value based on the page
   if (location.pathname === '/hetrix') {
     document.documentElement.style.setProperty('--sectionColor', '#FF2F01');
   } else if (location.pathname === '/venom') {
     document.documentElement.style.setProperty('--sectionColor', '#01D768');
   } else if (location.pathname === '/trenfinance') {
      document.documentElement.style.setProperty('--sectionColor', '#67DAB1');
   } else if (location.pathname === '/zume') {
      document.documentElement.style.setProperty('--sectionColor', '#8006FF');
   } else {
     // Set default color if the route doesn't match
     document.documentElement.style.setProperty('--sectionColor', '#D5FF63');
   }
 }, [location.pathname]);

  return children;
};

export default ScrollbarColorHOC;
