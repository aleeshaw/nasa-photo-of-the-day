import React, { useState } from 'react';

const ImgCard = (props) => {
  return (
    <div className="info-card">
      <img className="card-img" src={props.url} alt="NASA pic of the day" />
      <h1 className="title">{props.title}</h1>
      <p className="info">{props.info}</p>
     
    </div>
  )
};

export default ImgCard;