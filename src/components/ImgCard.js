import React, { useState } from 'react';

const ImgCard = (props) => {
  return (
    <div className="info-card">
      <img className="card-img" src={props.url} alt="NASA pic of the day" />
      <div className="text-info">
        <h1 className="title">{props.title}</h1>
        <h3 className="date">{props.date}</h3>
        <p className="info">{props.info}</p>
      </div>   
    </div>
  )
};

export default ImgCard;