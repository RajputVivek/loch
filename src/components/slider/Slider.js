import React, { useEffect } from 'react';
import "./slider.css";

// Import images
const images = [
  require("../../assets/images/card1.svg").default,
  require("../../assets/images/card2.svg").default,
  require("../../assets/images/card3.svg").default,
];

const Slider = () => {
  useEffect(() => {
    // If a user hasn't opted in for reduced motion, then add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="scroller" data-direction="left" data-speed="slow">
      <div className="scroller__inner">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Card ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
