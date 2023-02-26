import PropTypes from 'prop-types';
import React from 'react';
import Resturant from '../../../Category';
import classes from './HomePage.module.css';
import useMfeStore from 'LoginPageMFE/useMfeStore'

/**
 * Impliments HomePage component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns HomePage
 */

export const HomePage = (props) => {
    const login = useMfeStore(state => state.loginUser)
    login({
        name :'Kuldeep Dhaka'
    })
    return (

        <div className={classes.container}>
            <Resturant />
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
 * Default values for HomePage
 * 
 * @type {object}
 * @property {string} example='HomePage 
 */

export const defaultProps = {
    example: 'HomePage'
};

HomePage.propTypes = propTypes;
HomePage.defaultProps = defaultProps;

export default HomePage;