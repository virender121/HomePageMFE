import React from 'react'
import PropTypes from 'prop-types'

import classes from './Searchbar.module.css';



/**
 * Impliments searchbar component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Searchbar
 */

export const Searchbar = (props) => {
    return (
        <div className={classes.container}>
            {props.example}
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
 * Default values for Searchbar
 * 
 * @type {object}
 * @property {string} example='Searchbar 
 */

export const defaultProps = {
    example:'Searchbar'
};

Searchbar.propTypes = propTypes;
Searchbar.defaultProps = defaultProps;

export default Searchbar;