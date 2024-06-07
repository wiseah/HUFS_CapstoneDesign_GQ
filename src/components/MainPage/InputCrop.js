import React, { useState } from 'react';
import styled from 'styled-components';

import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { BsGeoFill } from 'react-icons/bs';

const InputDiv = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  cursor: pointer;

  padding: 19px 30px;

  width: ${({ theme }) => theme.divSizes.mainInputDivWidth};
  height: ${({ theme }) => theme.divSizes.mainInputDivHeight};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.input};

  color: ${({ theme }) => theme.colors.darkblue};
  background-color: ${({ theme }) => theme.colors.lightgreen};
  transition: background-color 0.2s;

  font-size: ${({ theme }) => theme.fontSizes.input};
  font-weight: ${({ theme }) => theme.fontsWeights.inputLight};

  .icon {
    width: ${({ theme }) => theme.icons.downFill};
    height: ${({ theme }) => theme.icons.downFill};

    margin: auto 0px auto auto;
    color: ${({ theme }) => theme.colors.darkblue};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.darkblue} !important;
    transition: color 0.2s !important;
    background-color: ${({ theme }) => theme.hoverColors.main} !important;
    transition: background-color 0.2s !important;

    font-weight: ${({ theme }) => theme.fontsWeights.inputBold} !important;
  }

  button {
    width: 100%;
    height: 100%;
  }
`;

const IsToggledDiv = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;
  align-items: center;

  width: 364px;
  height: 243px;

  color: ${({ theme }) => theme.colors.darkblue};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 5px #0000002f;

  border-radius: 15px;

  font-weight: ${({ theme }) => theme.fontsWeights.inputBold};

  .toggleHr {
    width: 321px;
    height: 3px;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.colors.darkblue};
  }
`;

const IsToggledHeader = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  margin-left: 0px;

  text-align: left;

  font-size: ${({ theme }) => theme.fontSizes.inputBold};
  font-weight: ${({ theme }) => theme.fontsWeights.inputBold};

  span {
    margin: auto 190px 17px 11px;
  }
`;

const IsToggledLine = styled.div`
  width: 321px;
  height: 3px;

  border-radius: 15%;

  background-color: ${({ theme }) => theme.colors.darkblue};
`;
const IsToggledButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const IsToggleCropDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 40px;

  margin-top: 23px;

  color: ${({ theme }) => theme.colors.darkblue};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;

  font-size: ${({ theme }) => theme.fontSizes.inputSelect};
  font-weight: ${({ theme }) => theme.fontsWeights.inputSelect};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.2s;

    background-color: ${({ theme }) => theme.colors.darkblue};
    transition: background-color 0.2s;
  }

  &.active {
    color: white;
    background-color: ${({ theme }) => theme.colors.darkblue};
  }
`;

function InputCrop({ onToggle, onClick }) {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
    onToggle(!isToggled); // 토글 상태에 따라 Main에 알림
  };

  const handleCropClick = (crop) => {
    setSelectedCrop(crop);
    onClick(crop); // 작물 선택 시 부모 컴포넌트에 알림
  };

  return (
    <>
      <InputDiv onClick={handleToggle}>
        작물선택
        <div className="icon">
          {isToggled ? <BsCaretUpFill className="icon" /> : <BsCaretDownFill className="icon" />}
        </div>
      </InputDiv>
      {isToggled && (
        <IsToggledDiv>
          <IsToggledHeader>
            <BsGeoFill /> <span>작물 선택</span>
          </IsToggledHeader>
          <IsToggledLine />
          <IsToggledButtonsDiv>
            <IsToggleCropDiv
              onClick={() => handleCropClick('감귤')}
              className={selectedCrop === '감귤' ? 'active' : ''}
            >
              감귤
            </IsToggleCropDiv>
            <IsToggleCropDiv
              onClick={() => handleCropClick('고추')}
              className={selectedCrop === '고추' ? 'active' : ''}
            >
              고추
            </IsToggleCropDiv>
            <IsToggleCropDiv
              onClick={() => handleCropClick('콩')}
              className={selectedCrop === '콩' ? 'active' : ''}
            >
              콩
            </IsToggleCropDiv>
          </IsToggledButtonsDiv>
          <IsToggledButtonsDiv>
            <IsToggleCropDiv
              onClick={() => handleCropClick('딸기')}
              className={selectedCrop === '딸기' ? 'active' : ''}
            >
              딸기
            </IsToggleCropDiv>
            <IsToggleCropDiv
              onClick={() => handleCropClick('사과')}
              className={selectedCrop === '사과' ? 'active' : ''}
            >
              사과
            </IsToggleCropDiv>
          </IsToggledButtonsDiv>
        </IsToggledDiv>
      )}
    </>
  );
}

export default InputCrop;
