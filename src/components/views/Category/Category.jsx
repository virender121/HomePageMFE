import React from "react";
import PropTypes from "prop-types";
import classes from "./Category.module.css";

/**
 * Impliments categery component
 *
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Categery
 */

export const Categery = (props) => {
  const CategoryArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className={classes.box_category}>
      <div className={classes.category}>
        {CategoryArray.map((el, i) => (
          <div className={classes.category_box} key={1 + 1}>
            <img
              src="https://media.istockphoto.com/id/1203599923/photo/food-background-with-assortment-of-fresh-organic-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=fRNCED4dyey-i6K2RHTPaIm_HFLUr3hnj4J6WblHaXc="
              className={classes.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />
            <div className={classes.category_box_title}>
              <div className={classes.category_box_title_info}>
                <h4>Vegetable</h4>
              </div>
            </div>
          </div>
        ))}
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
 * Default values for Categery
 *
 * @type {object}
 * @property {string} example='Categery
 */

export const defaultProps = {
  example: "Categery",
};

Categery.propTypes = propTypes;
Categery.defaultProps = defaultProps;

export default Categery;
