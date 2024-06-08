import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/HomePage/Header';
import State from '../components/HomePage/State';
import Weather from '../components/HomePage/Weather';

import WormRightTopImg from '../assets/images/wormRightTop.png';
import CloudImg from '../assets/images/cloud.png';
import getStateInfo from '../APIs/get/getStateInfo';

const Background = styled.div`
  display: flex;
  flex-direction: column;
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
`;

const Line = styled.div`
  width: 360px;
  height: 3px;
  border-radius: 15px;
  background-color: #665E5E;
`;

const WormRightTop = styled.img`
  position: absolute;
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
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('');
  const [inputData, setInputData] = useState(null);
  const [infoResult, setInfoResult] = useState(null);
  const [stateData, setStateData] = useState(null);
  const [nowData, setNowData] = useState(0);

  const bugs = [
    "담배거세미나방",
    "미국선녀벌레",
    "썩덩나무노린재",
    "작은뿌리파리",
    "톱다리개미허리노린재",
    "흰점도둑나방"
  ];

  useEffect(() => {
    const storedInputData = JSON.parse(localStorage.getItem("inputData"));
    if (storedInputData) {
      setInputData(storedInputData);
      setSelectedCrop(storedInputData.crop);
    }
  }, []);

  useEffect(() => {
    const fetchStateInfo = async () => {
      try {
        const result = await getStateInfo();
        setInfoResult(result);
        console.log("state 데이터:", result);
      } catch (error) {
        console.log("앨범 정보를 가져오는 데 실패했습니다:", error);
      }
    };
    if (inputData) {
      fetchStateInfo();
    }
  }, [inputData]);

  useEffect(() => {
    setNowData(0); // nowData 상태를 0으로 초기화합니다.
  }, [selectedCrop]);

  useEffect(() => {
    if (infoResult && infoResult.percentages && bugs[nowData]) {
      const currentBug = bugs[nowData];
      setStateData({
        percent: infoResult.percentages[currentBug],
        pestName: currentBug
      });
      localStorage.setItem("pestName", currentBug);
    }
  }, [nowData, infoResult]);

  if (!infoResult || !stateData) {
    return <div>Loading...</div>;
  }

  return (
    <Background>
      <Header selectedCrop={selectedCrop} setSelectedCrop={setSelectedCrop} />
      <Container>
        <WormRightTop src={WormRightTopImg} />
        <State stateData={stateData} nowData={nowData} setNowData={setNowData} />
      </Container>
      <Line />
      <Container>
        <CloudImage src={CloudImg} />
        <Weather />
      </Container>
    </Background>
  );
}

export default Home;
