import React from "react";
import style from "./NASAdesc.module.css";

const NASAdesc = ({ title, description, mediaType }) => {
  return (
    <div className={style.descriptionContainer}>
      <h1>{title}</h1>
      {description ? (
        <p>{description}</p>
      ) : (
        <p>Check out the cool {mediaType}</p>
      )}
    </div>
  );
};

export default NASAdesc;
