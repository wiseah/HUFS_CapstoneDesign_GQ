import React from 'react';
import styled from 'styled-components';

import {BiArchiveIn} from 'react-icons/bi';

const ToggleContentDownload=styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap:0.5vw;
  width: 100%;
  padding : 0.5vw;

  background-color: ${({theme})=>theme.colors.white};
  color:${({theme})=>theme.colors.orange};

  border-radius: 15px;

  font-size: 14px;
  font-weight: 700;

  .icon{
    margin: 0px;
  }

`;

const Download = (inputData) => {
  const handleDownload = () => {

    // const PestName=`${inputData.pest.PestName}`
    const PestName=inputData.inputData.pest.PestName;
    // const FILE_URL=`${inputData.pest.pesticideExcel}`;
    const FILE_URL=inputData.inputData.pest.pesticideExcel;

    // 링크를 동적으로 생성하여 클릭 이벤트를 트리거하여 파일을 다운로드
    const link = document.createElement('a');
    
    // link.href = downloadUrl;
    link.href=FILE_URL;
    link.setAttribute('download', PestName);  // filename을 지정하지 않으면 구글 드라이브의 원본 파일명을 사용합니다
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
        <ToggleContentDownload onClick={handleDownload}>
            <BiArchiveIn className='icon'/>
            <span>
                농약 제품 목록 엑셀 다운 받기
            </span>
        </ToggleContentDownload>
    </>
  );
};

export default Download;