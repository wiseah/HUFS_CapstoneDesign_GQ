import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoImg from '../assets/images/LogoImg.png';
import InputLocation from '../components/InputLocation';
import InputCrop from '../components/InputCrop';
import InputDay from '../components/InputDay';
import { BsArrowRightCircleFill } from "react-icons/bs";

const Background = styled.p`
    /* color: ${theme.colors.orange}; // 직접 참조 */
    background: linear-gradient(
        to bottom,
        #2ADEA1 0%,
        #2ADEA1 50%,
        #BCFEE7 100%
    );
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;  /* 모든 자식 요소를 중앙 정렬 */
`;

const LogoImage = styled.img`
    width: 250px;
    height: 250px;
    margin-top: 36px;
`;

const Components = styled.div`
  padding-top: 20px;
`;

const ComponentsContainer = styled.div`
padding-top: 19px;
`;

const Title1 = styled.div`
  font-weight: 600; /* Semi-bold 폰트 두께 */
  font-size: 20px;
  color: #ffffff; /* 글씨 색상을 흰색으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  padding-top: 28px;
`;
const Title2 = styled.div`
  font-weight: 800; /* Semi-bold 폰트 두께 */
  font-size: 36px;
  color: #ffffff; /* 글씨 색상을 흰색으로 설정 */
  text-align: center; /* 텍스트를 중앙 정렬 */
  padding-top: 8px;
`;

const ButtonDiv = styled.div`
  margin-top: 50px;
`;
const CheckButton = styled.button`
    width: 250px;
    height: 70px;
    border: none;
    border-radius: 50px;
    background-color: #ffffff;
    color: #14264C;
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    justify-content: center;  // 버튼 내부 요소를 가로 방향에서 중앙으로 정렬
    align-items: center;      // 버튼 내부 요소를 세로 방향에서 중앙으로 정렬
    padding: 0 15px;          // 패딩 추가로 인해 내부 요소들이 좀 더 중앙에 위치하도록 함
`;
const IconTextContainer = styled.div`
    display: flex;
    align-items: center;  // 세로 방향에서 아이템을 중앙 정렬
`;

const Main = () => {
  return (
    <>
      <Background>
        <LogoImage src={LogoImg} />
        <Title1>한 손에 담긴 해충 알림 센터</Title1>
        <Title2>G Q</Title2>
        <Components>
          <ComponentsContainer>
            <InputLocation/>
          </ComponentsContainer>
          <ComponentsContainer>
            <InputCrop/>  
          </ComponentsContainer> 
          <ComponentsContainer>
            <InputDay/>
          </ComponentsContainer>   
        </Components>
        <ButtonDiv>
          <CheckButton>
            <IconTextContainer>
              <BsArrowRightCircleFill size="28px" style={{ marginRight: '10px'}} />
              확인하기
            </IconTextContainer>
          </CheckButton>
        </ButtonDiv>
        <Outlet /> 
      </Background>
    </>
  );
};

export default Main;
