import React, { useState } from 'react';
import './projectcarousel.css'; // Import the CSS file for styling

const ProjectCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the index of the current image

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Move to the next image
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Move to the previous image
    };

    return (
        <div className="project-carousel">
            <img src={images[currentImageIndex]} alt={`Project ${currentImageIndex + 1}`} className="carousel-image" />
            <div className="carousel-buttons">
                <button onClick={prevImage}>&#10094;</button> {/* Button to move to the previous image */}
                <button onClick={nextImage}>&#10095;</button> {/* Button to move to the next image */}
            </div>
        </div>
    );
};

export default ProjectCarousel;
