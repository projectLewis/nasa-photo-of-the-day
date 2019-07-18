import React from "react";
import { Button, Icon } from "semantic-ui-react";
import date from "date-and-time";
import style from "./SearchButtons.module.css";

let counter = 0;

const SearchButtons = ({ getNASAdata, setDateOfAPOD }) => {
  const handlePrevious = () => {
    counter -= 1;
    const now = new Date();
    const yesterday = date.addDays(now, counter);
    const dateForAPOD = date.format(yesterday, "YYYY-MM-DD");
    getNASAdata(dateForAPOD);
    const dateForTitle = date.format(yesterday, "DD MMM YYYY");
    setDateOfAPOD(prevDate => dateForTitle);
  };
  const handleNext = () => {
    counter += 1;
    const now = new Date();
    const yesterday = date.addDays(now, counter);
    const dateForAPOD = date.format(yesterday, "YYYY-MM-DD");
    getNASAdata(dateForAPOD);
    const dateForTitle = date.format(yesterday, "DD MMM YYYY");
    setDateOfAPOD(prevDate => dateForTitle);
    if (counter > 0) {
      counter = 0;
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
