const InfoCard = ({ image, handlePause }) => {
  return (
    <div className="text-wrapper" onClick={handlePause}>
      <div>
        <p className="title">
          <strong> Title </strong> - {image?.title}
        </p>
        <p className="artist">
          <strong> Artist </strong> -{image?.artistDisplayName}
        </p>
        <p className="artist">
          <strong> Department </strong> - {image?.department}
        </p>
        <p className="artist">
          <strong> Culture </strong> - {image?.culture}
        </p>
        <p className="artist">
          <strong> Credit Line </strong> - {image?.creditLine}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
