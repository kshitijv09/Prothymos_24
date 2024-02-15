import React from 'react';
import ComingSoon from '../../Assets/coming-soon.png'; 
import "./Coming_soon.css";

export default function ComingSoonComp() {
  return (
    <div className="soon-main-container">
      <img src={ComingSoon}/>
    </div>
  );
};