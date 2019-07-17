import React, { useState, useEffect } from "react";
// outside helpers
import axios from "axios";
// components
import PhotoBody from "../PhotoBody/PhotoBody";
import NASAdesc from "../NASAdescription/NASAdesc";
import ReactLoading from "react-loading";
// styles
import style from "./Placeholder.module.css";
import DimmerComponent from "../Misc/DimmerComponent";

const Placeholder = () => {
  const [url, setURL] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    getNASAdata();
    document.title = "NASA STUFF";
  }, [mediaType]);

  const getNASAdata = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=6PVgasbJQ3KR2UdWAoAPfedgNpzHCbhtBtorsVXA"
      )
      .then(({ data }) => {
        if (data.media_type === "video") {
          setMediaType(prevType => "video");
        } else if (data.media_type === "image") {
          setMediaType(prevType => "image");
        }
        setTitle(prevTitle => data.title);
        setDescription(prevDesc => data.explanation);
        return setURL(prevUrl => data.url);
      })
      .catch(err => console.log(err));
  };
  if (title) {
    return (
      <div className={style.placeholderContainer}>
        <DimmerComponent />
        <PhotoBody url={url} mediaType={mediaType} />
        <NASAdesc
          title={title}
          description={description}
          mediaType={mediaType}
        />
      </div>
    );
  } else {
    return (
      <div>
        <ReactLoading
          className={style.loader}
          type={"cylon"}
          color={"red"}
          height={667}
          width={375}
        />
      </div>
    );
  }
};

export default Placeholder;
