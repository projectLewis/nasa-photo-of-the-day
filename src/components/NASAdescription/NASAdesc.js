import React from "react";
// styles
import style from "./NASAdesc.module.css";
import { Header, Segment, Rating } from "semantic-ui-react";

const NASAdesc = ({ title, description, mediaType }) => {
  return (
    <div className={style.descriptionContainer}>
      <Header as="h1" inverted>
        {title}
      </Header>
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
