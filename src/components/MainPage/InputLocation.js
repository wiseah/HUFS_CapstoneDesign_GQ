import React,{useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { BsGeoFill } from 'react-icons/bs';

const InputDiv=styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-align: center;

  cursor:pointer;

  padding:19px 30px;

  width:${({theme})=>theme.divSizes.mainInputDivWidth};
  height:${({theme})=>theme.divSizes.mainInputDivHeight};

  border : none;
  border-radius:${({theme})=>theme.borderRadius.input};
  
  color:${({theme})=>theme.colors.darkblue};
  background-color:${({theme})=>theme.colors.lightgreen};
  transition: background-color 0.2s;
  
  font-size:${({theme})=>theme.fontSizes.input};
  font-weight:${({theme})=>theme.fontsWeights.inputLight};

  .icon{
    width:${({theme})=>theme.icons.downFill};
    height:${({theme})=>theme.icons.downFill};

    margin:auto 0px auto auto;

    color:${({theme})=>theme.colors.darkblue};
  }

  &:hover {
    color : ${({theme})=>theme.colors.darkblue};
    transition: color 0.2s;
    background-color:${({theme})=>theme.hoverColors.main};
    transition: background-color 0.2s;
    
    font-weight:${({theme})=>theme.fontsWeights.inputBold};
  }

  button{
    width:100%;
    height:100%;
  }
`

const IsToggledDiv=styled.div`
  display:flex;
  flex-direction:column;

  text-align:center;
  align-items:center;

  width:364px;
  height:243px;

  color:${({theme})=>theme.colors.darkblue};
  background-color:${({theme})=>theme.colors.white};
  box-shadow:0px 3px 5px #0000002f;

  border-radius:15px;

  font-weight:${({theme})=>theme.fontsWeights.inputBold};

  .toggleHr{
    width:321px;
    height:3px;

    border-radius:50%;

    background-color:${({theme})=>theme.colors.darkblue};
  }
`;

const IsToggledHeader=styled.div`
  display:flex;
  flex-direction:row;

  margin-top:20px;
  margin-left:0px;

  text-align:left;
  // align-items:center;

  font-size:${({theme})=>theme.fontSizes.inputBold};
  font-weight:${({theme})=>theme.fontsWeights.inputBold};

  span{
    margin:auto 190px 17px 11px;
  }
`;

const IsToggledLine=styled.div`
  width:321px;
  height:3px;

  border-radius:15%;

  background-color:${({theme})=>theme.colors.darkblue};
`;

const IsToggleLocationDiv=styled.div`
  display:flex;
  text-align:center;
  align-items:center;
  justify-content:center;

  width:100px;
  height:40px;

  margin-top:23px;

  color:${({theme})=>theme.colors.darkblue};
  background-color:${({theme})=>theme.colors.white};
  border-radius:25px;
  
  
  font-size:${({theme})=>theme.fontSizes.inputSelect};
  font-weight:${({theme})=>theme.fontsWeights.inputSelect};
  
  &:hover{
    color:${({theme})=>theme.colors.white};
    transition:color 0.2s;
    
    background-color:${({theme})=>theme.colors.darkblue};
    transition:background-color 0.2s;
  }

  &.active {
    color: white;
    background-color: ${({ theme }) => theme.colors.darkblue};
  }
`;

function InputLocation( {onToggle, onClick} ) {
  const [isToggled, setIsToggled]=useState(false);
  const [selectedLocation,setSelectedLocation]=useState(null);

  const handleToggle=()=>{
    setIsToggled(prevState=>!prevState);
    onToggle(!isToggled);  // 토글 상태에 따라 Main에 알림
  };

  const handleLocationClick=(Location)=>{
    setSelectedLocation(Location);
    onClick(Location);
  }

  // 버튼 선택시 값 저장
  return (
    <>
          <InputDiv onClick={handleToggle}>
            지역 선택(도 단위)
            <div className='icon'>
              {isToggled?
                <BsCaretUpFill className='icon'/>:<BsCaretDownFill className='icon'/>}
            </div>
          </InputDiv>
          {isToggled && (
            <IsToggledDiv>
              <IsToggledHeader>
                <BsGeoFill /> <span>지역 선택</span>
              </IsToggledHeader>
              <IsToggledLine />
              <IsToggleLocationDiv
                // onClick={()=>onClick('충청도')}
                onClick={()=>handleLocationClick('충청도')}
                className={selectedLocation === '충청도' ? 'active' : ''}
              >충청도</IsToggleLocationDiv>
            </IsToggledDiv>
          )}
          {!isToggled && (<></>)}
    </>
  )
}

export default InputLocation
