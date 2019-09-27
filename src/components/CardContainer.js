import React, { useState, useEffect } from 'react';
import ImgCard from './ImgCard';
import axios from 'axios';

const CardContainer = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=8TfX3KPlNNfY3lFLJDBeTY3QljSKgT7VqVJJNxif')
      .then((results) => {
        setImgs(results.data);
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ImgCard title={imgs.title} info={imgs.explanation} url={imgs.url} date={imgs.date}/>
    </div>
  )
}

export default CardContainer;