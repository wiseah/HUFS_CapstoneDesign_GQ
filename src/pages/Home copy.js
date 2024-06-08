import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import Header from '../components/HomePage/Header';
import State from '../components/HomePage/State'
import Weather from '../components/HomePage/Weather';

import WormRightTopImg from '../assets/images/wormRightTop.png';
import CloudImg from '../assets/images/cloud.png'
import Weather1 from '../components/HomePage/Weather copy';
import getStateInfo from '../APIs/get/getStateInfo';

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

function Home1() {
  const navigate=useNavigate();
  const [selectedCrop, setSelectedCrop] = useState('콩');
  const [inputData, setInputData] = useState({"location":"충청도","crop":"감귤","date":"2024-06-04"});

  const [infoResult, setInfoResult] = useState({
      "selected_crop": selectedCrop,
      "selected_location": "충청도",
      "selected_date": "2024-06-04",
      "percentages": {
          "담배거세미나방": 50
      },
      "riskLevels": {
          "담배거세미나방": "주의"
      }
  });

  // 수정 - infoResult useState code
  // const [infoResult,setInfoResult]=useState({
  //   "selected_crop": '',
  //   "selected_location": '',
  //   "selected_date": "2024-06-04",
  //   "percentages": {
  //   },
  //   "riskLevels": {
  //   }
  // })

  const [stateData, setStateData] = useState({
    "percent":infoResult.percentages,
    "pestName":"톱다리개미허리노린재"
  });
  const [nowData, setNowData] = useState(0);
  
  const bugs = [
    "담배거세미나방",
    "미국선녀벌레",
    "썩덩나무노린재",
    "작은뿌리파리",
    "톱다리개미허리노린재",
    "흰점도둑나방"
  ]

  // 화면 로딩시 api에서 해충이름과 경보 percent 가져오는 코드
  // 이 코드 없애면 state 컴포넌트에서 "담배거세미나방 - 50"만 출력됨
  useEffect( () => {
    const fetchStateInfo = async () => {
      try{
        const result = await getStateInfo();
        setInfoResult(result);
        console.log("state 데이터:", result);

        setStateData({
          "percent":infoResult.percentages[bugs.at(nowData)],
          "pestName":bugs.at(nowData)
        })
      } catch (error) {
        console.log("앨범 정보를 가져오는 데 실패했습니다:", error);
      }
    };
    fetchStateInfo();
  }, [])

  // 코드 설명
  // localStorage에 "inputData"로 저장된 값을 가져온 뒤
  // 가져온 값은 JSON 문자열이므로 JSON.parse를 사용해 JavaScript 객체로 변환
  // 변환된 객체를 setInputData를 통해 컴포넌트의 상태로 설정
  useEffect(() => {
    setInputData(JSON.parse(localStorage.getItem("inputData")));
  },[]);

  // header 작물 변경시 데이터 변경
  useEffect(()=>{
    setSelectedCrop(inputData.crop);
  },[inputData]);

  // state 상태 코드
  useEffect(()=>{
    // 원본 코드
    setStateData({
      "percent":infoResult.percentages[bugs.at(nowData)],
      "pestName":bugs.at(nowData)
    })
    // 수정 코드

    localStorage.setItem("pestName",bugs.at(nowData));
  }, [nowData])

  return (
    <Background>
      <Header 
        selectedCrop={selectedCrop} 
        setSelectedCrop={setSelectedCrop}/>
      <Container>
        <WormRightTop src={WormRightTopImg}/>  
        <State 
          stateData={stateData} 
          nowData={nowData} 
          setNowData={setNowData}/> 
      </Container>
      <Line/>
      <Container>
        <CloudImage src={CloudImg}/>
        <Weather/>
      </Container>      
    </Background>
  )
}

export default Home1;
