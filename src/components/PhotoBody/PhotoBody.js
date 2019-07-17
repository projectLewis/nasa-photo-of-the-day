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
          width="100%"
          height="100%"
        />
      </div>
    );
  } else if (mediaType === "image") {
    return (
      <div className={style.NASAimage}>
        <img src={url} alt={title} />
      </div>
    );
  }
};

export default PhotoBody;
