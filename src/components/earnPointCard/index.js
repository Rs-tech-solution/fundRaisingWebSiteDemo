import React from "react";

const EarnPointsCard = ({
  item,
  cardClassName,
  imageClassName,
  overlayClassName,
  detailClassName,
  buttonClassName,
  tagClassName,
  descClassName,
  ...props
}) => {
  return (
    <div className={`${cardClassName}`}>
      <img src={item.src} alt={item.desc} className={`${imageClassName}`} />
      <div className={`${overlayClassName}`}></div>
      <div className={`${detailClassName}`}>
        <div className={`${tagClassName}`}>
          <img src="/slidesImages/coinsbg.png" alt="coin" />
          <div>{item.tag}</div>
        </div>
        <h5 className={`${descClassName}`}>{item.desc}</h5>
        <button className={`${buttonClassName}`}>Log on</button>
      </div>
    </div>
  );
};

export default EarnPointsCard;
