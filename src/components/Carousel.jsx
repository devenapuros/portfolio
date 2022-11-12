import React, { useState } from "react";
import "../styles/carousel.css";

export const Carousel = ({ images = [], path = "" }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (direction) => {
        let nextSlide =
            direction === "left" ? currentSlide - 1 : currentSlide + 1;
        console.log(nextSlide);
        if (nextSlide < 0) nextSlide = 3;
        else if (nextSlide >= 4) nextSlide = 0;
        setCurrentSlide(nextSlide);
    };

    return (
        <div className="carousel-container">
            <ul className="carousel-viewport">
                <li className="carousel-slide">
                    <img src="/projects/1.png" alt="" />
                </li>
                <li className="carousel-slide">
                    <img src="/projects/2.png" alt="" />
                </li>
                <li className="carousel-slide">
                    <img src="/projects/3.png" alt="" />
                </li>
                <li className="carousel-slide">
                    <img src="/projects/4.png" alt="" />
                </li>
            </ul>
            <button
                className="carousel-btn go-left"
                onClick={() => changeSlide("left")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="#000c"
                    height="16"
                    width="16"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
            <button
                className="carousel-btn go-right"
                onClick={() => changeSlide("right")}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="#000c"
                    height="16"
                    width="16"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
            <span className="carousel-indicator">{currentSlide + 1} / 4</span>
        </div>
    );
};
