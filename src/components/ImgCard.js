import React, { useState } from 'react';

const ImgCard = (props) => {
  return (
    <div className="info-card">
      <img className="card-img" src={props.url} alt="NASA pic of the day" />
      <div className="text-info">
        <h1 className="title">{props.tilte}</h1>
        <p className="description">{props.desc}</p>
      </div>
    </div>
  )
};

export default ImgCard;