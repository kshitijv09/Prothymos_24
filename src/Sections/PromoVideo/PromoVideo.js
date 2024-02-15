import React, { useRef, useEffect } from 'react';
import './PromoVideo.css'; // Import CSS file for styling
import vid from "../../Assets/vid.mp4"
export default function PromoVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    video.play(); // Auto-run video on component mount
  }, []);

  return (
    <div className="video-container">
      
      <video src={vid} ref={videoRef} className="promo-video" controls/>
    </div>
  );
}
