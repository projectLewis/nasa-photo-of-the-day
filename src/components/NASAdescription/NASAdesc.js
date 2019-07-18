import React from "react";
// styles
import style from "./NASAdesc.module.css";
import { Segment, Rating } from "semantic-ui-react";

const NASAdesc = ({ description, mediaType }) => {
  return (
    <div className={style.descriptionContainer}>
      {description ? (
        <>
          <Rating icon="star" defaultRating={3} maxRating={5} />
          <Segment inverted color="black">
            {description}
          </Segment>
        </>
      ) : (
        <p>Check out the cool {mediaType}</p>
      )}
    </div>
  );
};

export default NASAdesc;
