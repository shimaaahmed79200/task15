

function ImageList({ images, onImageClick }) {
  return (
    <div className="image-list">
      {images.map(image => (
        <div key={image.id} className="image-card" onClick={() => onImageClick(image)}>
          <img
            src={image.url}
            alt={image.title}
            className="image-item"
          />
          <div className="image-info">
            <h2>{image.title}</h2>
            <h4>{image.artist}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImageList;

// function ImageList({ images, onImageClick,}) {
//   return (
//     <>
//     <div className="image-list">
//       {images.map(image => (
//         <img
//           key={image.id}
//           src={image.url}
//           alt={image.title}
//           onClick={() => onImageClick(image)}
//           className="image-item"
//         />
//       ))}
//     </div>
//     <div></div>
//     </>
//   );
// }

// export default ImageList;