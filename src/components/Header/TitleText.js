import React from "react";
import { Header } from "semantic-ui-react";
import style from "./TitleText.module.css";

const TitleText = ({ title }) => {
  return (
    <div className={style.titleContainer}>
      <Header as="h1" inverted>
        {title}
      </Header>
    </div>
  );
};

export default TitleText;
