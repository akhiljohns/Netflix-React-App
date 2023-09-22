import React from "react";
import "./Banner.css"

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <div className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In corporis
          repellendus sapiente quidem numquam perferendis repellat velit
          praesentium voluptates voluptatem hic, incidunt, porro, animi officia
          temporibus tempore tempora voluptatibus! Odio!
        </div>
        <div className="fade_bottom"></div>
      </div>
    </div>
  );
}

export default Banner;
