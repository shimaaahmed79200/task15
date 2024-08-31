
// function ImageDetail({ image, onClose }) {
//   return (
//     <div className="View-details">
//       <div className="container">
      
      
//       <div className="image-detail">
//       <img src={image.url} alt={image.title} className="image-detail-view"/>
//       <button onClick={onClose} className="close-button">X</button>
//       <h2>{image.title}</h2>
//       <h1>{image.year}</h1>
//       <p>{image.description}</p>
//       <p><em>Artist: {image.artist}</em></p>
//       </div>
      
//       </div>
      
//       <div className="artist-details">
//       <img src={image.pic} alt={image.title} className="image-detail-view"/>
//       <a href={image.source} target="_blank" rel="noopener noreferrer">GO TO SOURCE</a>
//       </div>
        
//     </div>
    
//   );
// }

// export default ImageDetail;

function ImageDetail({ image, onClose }) {
  return (
    <div className="image-detail">
      <img src={image.url} alt={image.title} />
      
      <div className="text-content">
      <h1>{image.title}</h1>
        <h2>{image.artist}</h2>
        <p>{image.description}</p>
        <div className="year">{image.year}</div>
        <div className="artist-details">
        <img src={image.pic} alt={image.title} className="image-detail-view"/>
        <a href={image.source} target="_blank" rel="noopener noreferrer">GO TO SOURCE</a>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default ImageDetail;