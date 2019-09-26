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
  });

  return (
    <h1>test</h1>
    //this is where Imgcard will go with things bits from thing.
  )
}

export default CardContainer;