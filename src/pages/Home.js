import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import Header from '../components/HomePage/Header';
import State from '../components/HomePage/State'
import Weather from '../components/HomePage/Weather';

import WormRightTopImg from '../assets/images/wormRightTop.png';
import CloudImg from '../assets/images/cloud.png'
import Weather1 from '../components/HomePage/Weather copy';

const Background = styled.div`
  display: flex;
  flex-direction: column; //div 속성
  align-items: center;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.button`
border: none;
border-radius: 5px;
background-color: #3EB7EC;
color: #ffffff;
font-size: 24px;
font-weight: 500;
margin-top: 10px;
`;

const Container = styled.div`
position: relative;
margin: 32px 30px;
`
const Line=styled.div`
  width:360px;
  height:3px;

  border-radius:15px;

  background-color:#665E5E;
`;

const WormRightTop = styled.img`

  position: absolute; //애벌레 위치 움직이지 않으려면 부모에 relative, 자식 속성에 absolute주고 위치 조정해야함.
  left: 254px;
  top: -32px;
  z-index: 1;
`;

const CloudImage = styled.img`
position: absolute;
left: 250px;
top: -22px;
z-index: 1;
`;

function Home() {
  const navigate=useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('콩');

  return (
    <Background>
      <Header selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop}/>
      <Container>
        <WormRightTop src={WormRightTopImg}/>  
        <State selectedCrop={selectedCrop}/> 
      </Container>
      <Line/>
      <Container>
        <CloudImage src={CloudImg}/>
        <Weather/>
      </Container>      
    </Background>
  )
}

export default Home
