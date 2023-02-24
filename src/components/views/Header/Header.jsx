import React from "react";
import PropTypes from "prop-types";
import MyInput from "../MyInput/MyInput.jsx";
import classes from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import Text from "../Text/Text.jsx";

/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */

export const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.searchBar_div}>
        <MyInput placeholder="Search for item" className={classes.input} />
       <div className={classes.icons}> <VscAccount style={{fontSize:'30px'}} />  <Text variant="text-sm">Account</Text>

        <BsHeart style={{fontSize:'30px'}} />  <Text variant="text-sm">Like</Text>

        <BsCart3 style={{fontSize:'30px'}} /> <Text variant="text-sm">Cart</Text>
        </div>
      </div>
    

      <image src="" />
    </div>
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
 * Default values for Header
 *
 * @type {object}
 * @property {string} example='Header
 */

export const defaultProps = {
  example: "Header",
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
