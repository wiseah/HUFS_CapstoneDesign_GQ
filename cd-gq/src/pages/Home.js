import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

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
`;

function Home() {
  const navigate=useNavigate();

  return (
    <Background>
      <div>
        홈 페이지 입니다.
      </div>
      <Button onClick={() => navigate('/')}>사이트맵으로 가기</Button>
    </Background>
  )
}

export default Home
