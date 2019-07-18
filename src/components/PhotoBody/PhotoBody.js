import React from "react";
// styling
import style from "./PhotoBody.module.css";
// outside helpers
import ReactPlayer from "react-player";

const PhotoBody = ({ mediaType, url, title }) => {
  if (mediaType === "image") {
    return (
      <div>
        <img className={style.NASAimage} src={url} alt={title} />
      </div>
    );
  }
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
  }
};

export default PhotoBody;
