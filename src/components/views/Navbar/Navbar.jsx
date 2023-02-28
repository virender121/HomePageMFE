import PropTypes from "prop-types";
import React from "react";
import styles from "./Navbar.module.css";
import {FaShopify} from 'react-icons/fa'
/**
 * Impliments Navbar component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Navbar
 */

export const Navbar = (props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.brand}><FaShopify style={{fontSize: "30px", color:'#3BB77E',marginRight:'18rem'}}></FaShopify></div>
      </nav>
    </>
  );
};

/**
 * Property type definations
 *
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
  example: PropTypes.string,
};

/**
 * Default values for Navbar
 *
 * @type {object}
 * @property {string} example='Navbar
 */

export const defaultProps = {
  example: "Navbar",
};

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
