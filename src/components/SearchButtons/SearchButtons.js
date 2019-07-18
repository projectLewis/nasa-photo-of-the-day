import React from "react";
import { Button, Icon } from "semantic-ui-react";
import date from "date-and-time";
import style from "./SearchButtons.module.css";

let counter = 0;

const SearchButtons = ({ getNASAdata }) => {
  const handlePrevious = () => {
    console.log("left1 " + counter);
    counter -= 1;
    const now = new Date();
    const yesterday = date.addDays(now, counter);
    const dateFormatted = date.format(yesterday, "YYYY-MM-DD");
    getNASAdata(dateFormatted);
    console.log("left2 " + counter);
  };
  const handleNext = () => {
    console.log("right" + counter);
    counter += 1;
    const now = new Date();
    const yesterday = date.addDays(now, counter);
    const dateFormatted = date.format(yesterday, "YYYY-MM-DD");
    getNASAdata(dateFormatted);
    if (counter > 0) {
      counter = 0;
    }
    console.log("right" + counter);
  };

  return (
    <div className={style.buttonContainer}>
      <Button
        style={{
          borderRadius: "15px",
          backgroundColor: "burlywood",
          margin: "5px 25px 10px 25px"
        }}
        onClick={handlePrevious}
        icon
        labelPosition="left"
      >
        <Icon name="left arrow" />
        Previous
      </Button>
      <Button
        disabled={counter === 0 && true}
        style={{
          borderRadius: "15px",
          backgroundColor: "burlywood",
          margin: "5px 25px 10px 25px"
        }}
        onClick={handleNext}
        icon
        labelPosition="right"
      >
        Next
        <Icon name="right arrow" />
      </Button>
    </div>
  );
};

export default SearchButtons;
