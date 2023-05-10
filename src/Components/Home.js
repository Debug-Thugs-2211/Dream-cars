import React from "react";
import ReactPlayer from "react-player";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="video-wrapper">
        <ReactPlayer
          className="video"
          url="https://www.youtube.com/watch?v=YAWt-gktZqM&t=58s"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
      <div className="home-heading">
        <h1 className="title-home">Welcome to Dram Cars</h1>
        <p className="title-home2">Luxury & Exotic Cars On Demand</p>
      </div>
    </div>
  );
}

export default Home;
