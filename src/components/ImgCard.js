import React from 'react';
import '../ImgCard.css';

const ImgCard = (props) => {
  return (
    <div className="info-card">
      <img className="card-img" src={props.url} alt="NASA pic of the day" />
      <section className="text-info">
        <div className="title-date">
          <h1 className="title">{props.title}</h1>
          <h3 className="date">{props.date}</h3>
        </div>
        <p className="info">{props.info}</p>
      </section>   
    </div>
  )
};

export default ImgCard;