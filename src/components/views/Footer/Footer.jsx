import React from "react";
import PropTypes from "prop-types";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTumbler } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";
import classes from "./Footer.module.css";

/**
 * Impliments footer component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Footer
 */

export const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_box}>
        <div className={classes.footer_box_social}>
          <img src="" alt="logo" height={100} width={100} />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            pariatur quo minus praesentium illum. Eligendi fugiat iusto tempore
            inventore animi!
          </p>
          <div className={classes.footer_social}>
            <a href="#">
              <TiSocialFacebookCircular />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTumbler />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={classes.footer_box_discover_menu}>
          <h3>Discover</h3>
          <ul>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className={classes.footer_box_help}>
          <h3>Help Center</h3>
        </div>
        <div className={classes.subcribe}>
            <h3>Subcribe</h3>
            <div className={classes.subcribe_box}>
          <input type="email" placeholder="Enter Your Email *" />
          <RiSendPlaneFill className={classes.subcribe_box_send} />
        </div>
        <div className={classes.subcribe_box_info}>
            <p> Plaese Subcribe For Daily News And Update.</p>
        </div>
        </div>
      </div>
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
 * Default values for Footer
 *
 * @type {object}
 * @property {string} example='Footer
 */

export const defaultProps = {
  example: "Footer",
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
