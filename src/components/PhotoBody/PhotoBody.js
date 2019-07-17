import React from "react";
// styling
import style from "./PhotoBody.module.css";
// outside helpers
import ReactPlayer from "react-player";

const PhotoBody = ({ mediaType, url, title }) => {
  if (mediaType === "video") {
    return (
      <div className={style.playerWrapper}>
        <ReactPlayer
          className={style.reactPlayer}
          url={url}
          width="80%"
          height="80%"
        />
      </div>
    );
  } else if (mediaType === "image") {
    return (
      <div>
        <img src={url} alt={title} />
      </div>
    );
  }
};

export default PhotoBody;
