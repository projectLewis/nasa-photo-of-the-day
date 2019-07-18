import React, { useState, useEffect } from "react";
// outside helpers
import axios from "axios";
// components
import PhotoBody from "../PhotoBody/PhotoBody";
import NASAdesc from "../NASAdescription/NASAdesc";
import ReactLoading from "react-loading";
// styles
import style from "./Placeholder.module.css";
import SearchButtons from "../SearchButtons/SearchButtons";
import TitleText from "../Header/TitleText";

const Placeholder = () => {
  const [url, setURL] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState("");
  const [dateOfAPOD, setDateOfAPOD] = useState(null);

  useEffect(() => {
    getNASAdata();
    document.title = dateOfAPOD ? dateOfAPOD : "SPACE is AWESOME";
    if (title) {
      document.getElementById("defaultLoader").style.display = "none";
    }
  }, [dateOfAPOD, title]);

  const APODurl =
    "https://api.nasa.gov/planetary/apod?api_key=6PVgasbJQ3KR2UdWAoAPfedgNpzHCbhtBtorsVXA";

  const getNASAdata = date => {
    if (date) {
      axios
        .get(
          `${APODurl}&start_date=${date.toString()}&end_date=${date.toString()}`
        )
        .then(({ data }) => {
          if (data[0].media_type === "video") {
            setMediaType(prevType => "video");
          } else if (data[0].media_type === "image") {
            setMediaType(prevType => "image");
          }
          setTitle(prevTitle => data[0].title);
          setDescription(prevDesc => data[0].explanation);
          return setURL(prevUrl => data[0].url);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(APODurl)
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
    }
  };
  if (title) {
    return (
      <div className={style.placeholderContainer}>
        <PhotoBody url={url} mediaType={mediaType} />
        <TitleText title={title} />
        <SearchButtons
          getNASAdata={getNASAdata}
          setDateOfAPOD={setDateOfAPOD}
        />
        <NASAdesc description={description} mediaType={mediaType} />
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
