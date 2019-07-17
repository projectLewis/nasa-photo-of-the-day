import React, {useState, useEffect} from 'react'
import axios from 'axios';
import ReactPlayer from 'react-player';
import style from './PhotoBody.module.css';
import ReactLoading from 'react-loading';

const PhotoBody = () => {

const [url, setURL] = useState("");
const [mediaType, setMediaType] = useState();
// const [error, setError] = useState();
useEffect(() => getNASAdata(),[]);

  const getNASAdata = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=6PVgasbJQ3KR2UdWAoAPfedgNpzHCbhtBtorsVXA')
    .then(({data}) => {
      if (data.media_type === "video") {
        setMediaType(prevType => "video");
        setURL(prevUrl => data.url);
      }
    })
    .catch(err => console.log(err));
  }

  if (mediaType === 'video') {

  return (
    <div className={style.playerWrapper}>
    <ReactPlayer
      className={style.reactPlayer}
      url={url}
      width='100%'
      height='100%'
    />
  </div>
  )
} else {
  return (
    <div>
    <ReactLoading type={'cylon'} color={'red'} height={667} width={375} />
    </div>
    )
}
}

export default PhotoBody
