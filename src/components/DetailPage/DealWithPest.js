import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  BsFillExclamationCircleFill
  ,BsCaretDownFill 
  ,BsCaretUpFill
  ,BsCaretRightFill
} from 'react-icons/bs';
import {BiArchiveIn} from 'react-icons/bi';

// eslint-disable-next-line
import {saveAs} from 'file-saver';

import DownloadFile from './DownloadFile';
import Download from './Download';
import PestManagement from './PestManagements';

const Container=styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2vw;

  padding:28px;
  
  width: 90%;

  background-color: ${({theme})=>theme.colors.orange};
  color:${({theme})=>theme.colors.white};
  box-shadow:0px 3px 5px #0000002f;

  border-radius: 50px;
`;
const Header=styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;

  flex-wrap: wrap;
  gap:1vw;

  .headerIcon{
    margin:0px;
  }

  .headerText{
    font-size: ${({theme})=>theme.fonts.dealWithPest.toggleHeader};
    font-weight: ${({theme})=>theme.fontsWeights.dealWithPest.header};
    letter-spacing: 0.1vw;
  }
`;

const ToggleDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  gap:0px;

  cursor: pointer;

  color:${({theme})=>theme.colors.white};
  background-color: transparent;
  border-radius: 50px;

  font-size: ${({theme})=>theme.fonts.dealWithPest.toggleHeader};
  font-weight: ${({theme})=>theme.fontsWeights.toggle};
`;
const ToggleDivHeader=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;

  width:100%;
  padding:18px;
  
  flex-wrap: wrap;
  gap:3vw;

  color:${({theme})=>theme.colors.white};
  background-color: transparent;
  border-radius: 50px;

  font-weight: ${({theme})=>theme.fontsWeights.dealWithPest.toggleHeader};

  &:hover{
    background-color: ${({theme})=>theme.colors.white} !important;
    color:${({theme})=>theme.colors.orange} !important;
    box-shadow:0px 3px 5px #0000002f !important;
    transition: background-color 0.2s !important;

    .icon {
      color:${({theme})=>theme.colors.orange} !important;
      transition: color 0.2s !important;
    }
  }
  .toggleHeader{
    display: flex;
    flex-direction: row;
    width: 100%;
    
    justify-content: space-between !important;
    align-items: center;

  }
  .icon{
    width:${({theme})=>theme.icons.downFill};
    height:${({theme})=>theme.icons.downFill};
    margin:0px;

    color:${({theme})=>theme.colors.white};
  }
`;

const ToggleContent=styled.div`
  flex-direction: column;
  padding:1.5vw;

  width: 100%;

  background-color: ${({theme})=>theme.colors.lightorange};
  color:${({theme})=>theme.colors.orange};
  border-radius: 15px;
  box-shadow:0px 3px 5px #0000002f;

  font-weight: ${({theme})=>theme.fontsWeights.toggle};


  flex-wrap: wrap;
    gap: 0.5vw;
  .informationHeader{
    font-weight:700;
  }
  .informationContent{
    flex-wrap: wrap;
    gap: 0.5vw;

    line-height: 1.3;
  }
`;
const ToggleContentAdd=styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top:1vw;

  flex-wrap: wrap;
  gap: 1vw;

  color:${({theme})=>theme.colors.orange};

  font-size:${({theme})=>theme.fontSizes.dealwithpestAdd};
  .excelFont{
    /* text-align: left; */
    font-size: 10px;
  }
`;

const ToggleInformationContent=styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5vw;

  text-align: left;
  align-items: center;
  .icon{
    margin: 0;
  }
  .content{
    font-size: 16px;
    line-height: 1.3;
  }
`;

function DealWithPest({inputData}) {
  const [isToggledPesticide,setIsToggledPesticide]=useState(false);
  const [isHandleDownloadButton,setIsHandleDownloadButton]=useState(false);
  const [isToggled01, setIsToggled01] = useState(false);
  const [isToggled02, setIsToggled02] = useState(false);

  const handleTogglePesticide = () => {
    setIsToggledPesticide(prevState => !prevState);
    if (isToggledPesticide === false && isHandleDownloadButton === false){
      setIsToggledPesticide(prevState => prevState);
      setIsHandleDownloadButton(prevState=>!prevState);
    } 
    else if (isToggledPesticide === false && isHandleDownloadButton === true){
      setIsToggledPesticide(prevState => !prevState);
      setIsHandleDownloadButton(prevState =>! prevState);
    }
    else if (isToggledPesticide === true && isHandleDownloadButton === true){
      setIsToggledPesticide(prevState => !prevState);
      setIsHandleDownloadButton(prevState =>! prevState);
    }
  };

  const handleToggle01 = () => {
      setIsToggled01(prevState => !prevState);
  };

  const handleToggle02 = () => {
    setIsToggled02(prevState => !prevState);
};

  const handleButton=()=>{
    setIsHandleDownloadButton(prevState => !prevState);
  }
  // inputData와 inputData.pestInfo가 정의되어 있는지 확인합니다.
  // if (!inputData || !inputData.pestInfo) {
  // return <div>데이터를 불러오는 중입니다...</div>;
  // }

  let managementIndex=0;
  return (
    <>
      <Container>
        <Header>
          <BsFillExclamationCircleFill className='headerIcon'/>
          <span className='headerText'>{inputData.pest.pestName} 대처법</span>
        </Header>
        <ToggleDiv onClick={handleTogglePesticide}>
          <ToggleDivHeader 
            style={{ 
              background: isToggledPesticide ? 'white' : 'inherit',
              color: isToggledPesticide ? '#FF6A4A' : 'inherit',
              boxShadow: isToggledPesticide ? '0px 3px 5px #0000002f' : 'inherit'
              }}>
            <div className='toggleHeader'>
              농약 추천
              {isToggledPesticide ?
                  <BsCaretUpFill 
                    style={{
                      color:isToggledPesticide ? '#FF6A4A' : 'inherit'
                    }}
                    className='icon' /> :
                  <BsCaretDownFill className='icon'/>
              }
            </div>
          </ToggleDivHeader>
          {isToggledPesticide && (
            <ToggleContent>
              {inputData.pesticide_info.length > 0 ? (
                inputData.pesticide_info.map((info, index) => (
                  <div key={index} className='informationContent'>
                    <p className='informationHeader'>회사명</p>
                    <ToggleInformationContent>
                      <BsCaretRightFill className='icon'/>
                      <span className='content'>{info.companyName}</span>
                    </ToggleInformationContent>
                    <p className='informationHeader'>농약명</p>
                    <ToggleInformationContent>
                      <BsCaretRightFill className='icon'/>
                      <span className='content'>{info.pesticideName}</span>
                    </ToggleInformationContent>
                    <p className='informationHeader'>안전 사용 시기</p>
                    <ToggleInformationContent>
                      <BsCaretRightFill className='icon'/>
                      <span className='content'>{info.safeUsagePeriod}</span>
                    </ToggleInformationContent>
                    <p className='informationHeader'>안전 사용 횟수</p>
                    <ToggleInformationContent>
                      <BsCaretRightFill className='icon'/>
                      <span className='content'>{info.safeUsageFrequency}</span>
                    </ToggleInformationContent>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
              
              <ToggleContentAdd>
                <p className='excelFont'>추가 정보는 아래 엑셀을 다운 받아서 확인해주세요!</p>
                {/* <DownloadFile
                  name={inputData.pest.pestName}
                  fileUrl={inputData.pest.pesticideExcel}
                  onClick={handleButton}
                  /> */}
                <Download
                  inputData={inputData}
                  onClick={handleButton}
                />
              </ToggleContentAdd>
            </ToggleContent>
          )}
          {!isToggledPesticide && (<></>)}
        </ToggleDiv>

        {/* 컴포넌트 코드 */}
        {Array.isArray(inputData.management) ? (
          inputData.management.map((management, index) => (
            <PestManagement key={index} index={index + 1} management={management} />
          ))
        ) : (
          <div>데이터를 불러오는 중입니다...</div>
        )}

      </Container>
    </>
  )
};

export default DealWithPest;