import React, { useRef, useEffect } from 'react';
import './PromoVideo.css'; // Import CSS file for styling
import vid from "../../Assets/vid.mp4"
export default function PromoVideo() {
  


  return (
    <div className="video-container">
      
      <video src={vid}  className="promo-video" controls/>
    </div>
  );
}
