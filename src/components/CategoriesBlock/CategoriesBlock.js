import React from "react";

import classes from "./CategoriesBlock.module.css";

const CategoriesBlock = ({ data }) => {
  return (
    <div className={classes["categories-block-container"]}>
      {data.map((category) => (
        <>
          <div className={classes["categories-block-category-container"]}>
            <img
              className={classes["categories-block-category-img"]}
              src={category.img}
              alt=""
            />
            <div className={classes["categories-block-category-name"]}>
              {category.productCategory}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default CategoriesBlock;
