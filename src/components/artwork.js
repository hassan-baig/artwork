const Artwork = ({ image, handlePause }) => {
  return (
    <img
      src={
        image?.primaryImageSmall ||
        'https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png'
      }
      className="artwork"
      onClick={handlePause}
      alt={image?.title || 'No Image Found'}
    />
  );
};

export default Artwork;
