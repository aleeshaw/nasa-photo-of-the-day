import React, { useState, useEffect } from 'react';
import ImgCard from './ImgCard';
import axios from 'axios';

const CardContainer = () => {
  var today = new Date();
  var date = `${today.getFullYear()}-0${today.getMonth()+1}-${today.getDate()}`;
  const [imgs, setImgs] = useState([]);
  const [pageDate, setDate] = useState([date]);

  useEffect(() => {
    //let date = `2001-09-11`;
    //const nasaApi = ;

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=8TfX3KPlNNfY3lFLJDBeTY3QljSKgT7VqVJJNxif&date=${pageDate}`)
      .then((results) => {
        setImgs(results.data);
        console.log(results);
        console.log(date);
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