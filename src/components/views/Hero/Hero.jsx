import PropTypes from 'prop-types';
import React from 'react';
import Carousele from './Carousel';
import classes from './Hero.module.css';



/**
 * Impliments Hero component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Hero
 */

export const Hero = (props) => {

  return (
  <div className={classes.container}>
   
    <Carousele />

    </div>
  )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string
};

/**
 * Default values for Hero
 * 
 * @type {object}
 * @property {string} example='Hero 
 */

export const defaultProps = {
  example: 'Hero'
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;