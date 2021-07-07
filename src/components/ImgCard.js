import React from 'react';
import styled from 'styled-components';


//stylings 
const CardDiv = styled.div`
  display: flex;
  margin: 70px 10%;
`;
const CardImg = styled.img`
  width: 50%;
  height: 100%;
`;
const InfoSection = styled.section`
  margin-left: 70px;
  margin-top: -20px;
  width: 50%;
`;
const TitleDate = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1.25rem;
  }
`;
const InfoPara = styled.p`
  text-align: justify;
`;

const ImgCard = (props) => {
  return (
    <CardDiv className="info-card">
      <CardImg src={props.url} alt="NASA pic of the day" />
      <InfoSection>
        <TitleDate className="title-date">
          <h1 className="title">{props.title}</h1>
          <h3 className="date">{props.date}</h3>
        </TitleDate>
        <InfoPara className="info">{props.info}</InfoPara>
      </InfoSection>   
    </CardDiv>
  )
};

export default ImgCard;