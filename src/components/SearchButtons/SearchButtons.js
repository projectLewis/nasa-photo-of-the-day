import React from "react";
import { Button, Icon } from "semantic-ui-react";
import date from "date-and-time";
import style from "./SearchButtons.module.css";

let counter = 0;

const SearchButtons = ({ getNASAData }) => {
  const handlePrevious = () => {
    counter -= 1;
    const now = new Date();
    const yesterday = date.addDays(now, counter);
    const dateFormated = date.format(yesterday, "YYYY-MM-DD");

    getNASAData(dateFormated);
  };
  const handleNext = ({ getNASAData }) => {
    if (counter <= 0) {
      counter += 1;
      const now = new Date();
      const tomorrow = date.addDays(now, counter);
      const dateFormated = date.format(tomorrow, "YYYY-MM-DD");
      getNASAData(dateFormated);
    }
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
      {counter < 0 ? (
        <Button
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
      ) : null}
    </div>
  );
};

export default SearchButtons;
