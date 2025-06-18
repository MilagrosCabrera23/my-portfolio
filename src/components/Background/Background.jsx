import "./Background.css";
import backgroundVideo from "../../assets/videos/background6.mp4";

const BackgroundComponent = () => {


  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
      >
        <source src={backgroundVideo} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>
       <div className="video-overlay" />
    </>
); 
}; 


export default BackgroundComponent; 