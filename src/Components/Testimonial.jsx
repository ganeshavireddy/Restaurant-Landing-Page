import React from "react";
import ProfilePic from "../Assets/ganesh-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
         Our experience was amazing — the food was fresh, flavorful, and delivered right on time. The entire process was so smooth, from ordering to delivery.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          “The meals are absolutely delicious and always arrive hot! This service has made dinner time stress-free and enjoyable for my whole family.”
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Ganesh avireddy</h2>
      </div>
    </div>
  );
};

export default Testimonial;
