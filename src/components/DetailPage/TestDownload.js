import React from 'react';
import styled from 'styled-components';
import {BiArchiveIn} from 'react-icons/bi';

const ToggleContentDownload=styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;
  gap:0.1vw;
  width: 100%;
  padding : 1vw;

  background-color: ${({theme})=>theme.colors.white};
  color:${({theme})=>theme.colors.orange};

  border-radius: 15px;

  font-size: ${({theme})=>theme.fontSizes.downloadButton};

  .icon{
    margin: 0px;
  }

`;

const TestDownload = () => {
  const handleDownload = () => {
    const fileId = '1c9wuNH8a57PQ7q64l-WOUI97994Q3vnldCrRuEEgn5k';
    const downloadUrl = `https://docs.google.com/spreadsheets/d/1c9wuNH8a57PQ7q64l-WOUI97994Q3vnldCrRuEEgn5k/export?format=xlsx
    `;

    // 링크를 동적으로 생성하여 클릭 이벤트를 트리거하여 파일을 다운로드
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', '');  // filename을 지정하지 않으면 구글 드라이브의 원본 파일명을 사용합니다
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

export default TestDownload;