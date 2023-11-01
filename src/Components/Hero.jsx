import React from 'react'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="shop">Shop Now</button>
          <button className="category">Category</button>
        </div>
        <div className="available">
          <p>Available only on</p>
        </div>
        <div className="estore">
          <img src="Images/amazon.png" alt="" />
          <img src="Images/flipkart.png" alt="" />
        </div>
      </div>
      <div className="hero-image">
        <img src="Images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}

export default Hero