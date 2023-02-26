import React, { useState } from "react";
import PropTypes from "prop-types";
import MyInput from "../MyInput/MyInput.jsx";
import classes from "./Header.module.css";
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import Text from "../Text/Text.jsx";
import { IconButton } from "@mui/material";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
/**
 * Impliments Header component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Header
 */
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const Header = (props) => {
  // const [count,setCount]=useState(0)
  return (
    <div className={classes.container}>
      <div className={classes.searchBar_div}>
        <MyInput placeholder="Search for item" className={classes.input} />
       <div className={classes.icons}> <VscAccount style={{fontSize:'30px'}} />  <Text variant="text-sm">Account</Text>
        <BsHeart style={{fontSize:'30px'}} />  <Text variant="text-sm">Like</Text>


       <BsCart3 style={{fontSize:'30px'}} /> <Text variant="text-sm">Cart</Text>
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={2} color="secondary">
        <ShoppingCartIcon />
        </StyledBadge>
    </IconButton>
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
