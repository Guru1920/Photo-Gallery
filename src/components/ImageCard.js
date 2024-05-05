// import React from 'react';

// const ImageCard = ({ image }) => {
//   return (
//     <div>
//       <img src={image.imageUrl} alt={image.title} />
//       <p>{image.title}</p>
//       <p>{image.description}</p>
//       <p>{image.location}</p>
//       <p>{image.createdAt}</p>
//     </div>
//   );
// };

// export default ImageCard;
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={"/images/the-avengers.jpg"} alt={image.title} />
      <p>{image.title}</p>
      <p>{image.description}</p>
      <p>{image.location}</p>
      <p>{image.createdAt}</p>
    </div>
  );
};

export default ImageCard;