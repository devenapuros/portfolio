import React, { useEffect, useRef, useState } from "react";
import "../styles/carousel.css";

export const Carousel = ({ images, path = "" }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef();
    const containerRef = useRef();
    let options = {
        root: carouselRef.current,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const detectScroll = (entries) => {
        let nextSlide;
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                nextSlide = parseInt(entry.target.getAttribute("data-index"));
                setCurrentSlide(nextSlide);
            }
        });
    };

    useEffect(() => {
        let observer = new IntersectionObserver(detectScroll, options);
        for (let i = 0; i < carouselRef.current.children.length; i++) {
            observer.observe(carouselRef.current.children[i]);
        }
    }, []);

    const changeSlide = (direction) => {
        let nextSlide =
            direction === "left" ? currentSlide - 1 : currentSlide + 1;
        if (nextSlide < 0) nextSlide = images.length - 1;
        else if (nextSlide >= images.length) nextSlide = 0;
        let containerWidth = containerRef.current.clientWidth;
        carouselRef.current.scroll(nextSlide * containerWidth, 0);
    };

    return (
        <div className="carousel-container" ref={containerRef}>
            <ul className="carousel-viewport" ref={carouselRef}>
                {images.map((image, index) => (
                    <li
                        className="carousel-slide"
                        key={image}
                        data-index={index}
                    >
                        <img
                            src={`/projects/${path}/${image}`}
                            alt=""
                            loading="lazy"
                        />
                    </li>
                ))}
            </ul>
            {currentSlide !== 0 && (
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
            )}
            {currentSlide !== images.length - 1 && (
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
            )}
            <span className="carousel-indicator">
                {currentSlide + 1} / {images.length}
            </span>
        </div>
    );
};
