import React from 'react';

const CardComponent = ({ imageUrl, altText, exploreText }) => {
  return (
    <div>
      <img className="inner-image" src={imageUrl} alt={altText} />
      <div className="explore-text">{exploreText}</div>
    </div>
  );
};

export default CardComponent;