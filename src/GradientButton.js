import React, { useState } from 'react'; // Import useState for managing hover state
import PropTypes from 'prop-types';
import arrow from './assets/arrow2.svg'; // Original arrow image
import arrowRight from './assets/arrow-right-button.svg'; // New arrow image for hover

const GradientButton = ({ 
    text, 
    height = '56px', 
    width = '195px', 
    borderRadius = '10px', 
    fontSize = '22px', // Default font size
    image, 
    arrow: showArrow = false, // Arrow prop to show/hide the arrow
    link 
}) => {
    const [isHovered, setIsHovered] = useState(false); // State to track hover

    const buttonStyle = {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 10px', 
        cursor: 'pointer',
        backgroundColor: 'transparent',
        height: height,
        width: width,
        overflow: 'hidden',
        color: 'transparent', 
        fontSize: fontSize, // Set font size here
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    };

    const beforeStyle = {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: borderRadius,
        border: '2px solid transparent',
        background: 'linear-gradient(to top right, #8CC2E9, #A9E1D3)',
        mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        zIndex: -1,
    };

    const buttonContent = (
        <>
            <div style={beforeStyle} />
            {image && (
                <img 
                    src={image} 
                    alt="" 
                    style={{ 
                        position: 'absolute', 
                        top: '0', 
                        left: '0', 
                        right: '0', 
                        bottom: '0', 
                        borderRadius: borderRadius, 
                        objectFit: 'cover', 
                        opacity: 0.2 
                    }} 
                />
            )}
            <span style={{ 
                position: 'relative', 
                zIndex: 1, 
                backgroundImage: 'linear-gradient(to top right, #8CC2E9, #A9E1D3)', 
                backgroundClip: 'text', 
                WebkitBackgroundClip: 'text',
                color: 'transparent', 
                padding: 0, 
                margin: 0, 
            }}>
                {text}
                {showArrow && (
                    <img 
                        src={isHovered ? arrowRight : arrow} // Switch image based on hover state
                        alt="Arrow" 
                        style={{ marginLeft: '10px', width: '15.56px' }} 
                    />
                )}
            </span>
        </>
    );

    return (
        <span 
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave
        >
            {link ? (
                <a href={link} style={{ textDecoration: 'none' }}>
                    {buttonContent}
                </a>
            ) : (
                buttonContent
            )}
        </span>
    );
};

GradientButton.propTypes = {
    text: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
    borderRadius: PropTypes.string,
    fontSize: PropTypes.string, // Font size prop
    image: PropTypes.string,
    arrow: PropTypes.bool,
    link: PropTypes.string,
};

export default GradientButton;
