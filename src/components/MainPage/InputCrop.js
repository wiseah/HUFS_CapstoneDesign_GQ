import React,{useState} from 'react';
import styled from 'styled-components';

import { BsCaretDownFill } from 'react-icons/bs';
import { BsCaretUpFill } from 'react-icons/bs';
import { BsGeoFill } from 'react-icons/bs';
import {BsQuestionCircleFill} from 'react-icons/bs';

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
    color : ${({theme})=>theme.colors.darkblue} !important;
    transition: color 0.2s !important;
    background-color:${({theme})=>theme.hoverColors.main} !important;
    transition: background-color 0.2s !important;
    
    font-weight:${({theme})=>theme.fontsWeights.inputBold} !important;

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
const IsToggledButtonsDiv=styled.div`
  display:flex;
  flex-direction:row;
`;
const IsToggleCropDiv=styled.div`
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
`;

function InputCrop( {onToggle, onClick} ) {
  const [isToggled, setIsToggled]=useState(false);

  const handleToggle=()=>{
    setIsToggled(prevState=>!prevState);
    onToggle(!isToggled);  // 토글 상태에 따라 Main에 알림
  };
  
  const [selectCrop, setSelectCrop]=useState(false);

  const [selectTangerine,setSelectTangerine]=useState(false);
  const [selectPapper,setSelectPepper]=useState(false);
  const [selectBean,setSelectBean]=useState(false);
  const [selectStrawberry,setSelectStrawberry]=useState(false);
  const [selectApple,setSelectApple]=useState(false);

  const handleCrop=()=>{
    setSelectCrop(!selectCrop);
  };
  const handleTangerin=()=>{
    if(setSelectCrop===true){
      setSelectTangerine(true);
    }else{
      setSelectTangerine(false);
    }
  };
  const handlePapper=()=>{
    if(setSelectCrop===true){
      setSelectPepper(true);
    }else{
      setSelectPepper(false);
    }
  };
  const handleBean=()=>{
    if(setSelectCrop===true){
      setSelectBean(true);
    }else{
      setSelectBean(false);
    }
  };
  const handleApple=()=>{
    if(setSelectCrop===true){
      setSelectApple(true);
    }else{
      setSelectApple(false);
    }
  };

  return (
    <>
      <InputDiv onClick={handleToggle}>
        작물선택
        <button className='icon'>
          {isToggled?<BsCaretUpFill className='icon'/>:<BsCaretDownFill className='icon'/>}
        </button>
      </InputDiv>
      {isToggled && (
            <IsToggledDiv>
              <IsToggledHeader>
                <BsGeoFill /> <span>지역 선택</span>
              </IsToggledHeader>
              <IsToggledLine />
              <IsToggledButtonsDiv onClick={handleCrop}>
                {/* <IsToggleCropDiv
                  onClick={()=>onClick('감귤')}
                  style={selectTangerine && {backgroundColor:'#14264C', color:'white'}}
                >
                  감귤
                  </IsToggleCropDiv> */}
                <IsToggleCropDiv
                    onClick={() => onClick('감귤')}
                    style={selectTangerine ? { backgroundColor: '#14264C', color: 'white' } : null}
                >
                  감귤
                </IsToggleCropDiv>

                <IsToggleCropDiv
                  onClick={()=>onClick('고추')}
                >고추</IsToggleCropDiv>
                <IsToggleCropDiv
                  onClick={()=>onClick('콩')}
                  // style={{ backgroundColor: selectCrop === '콩' ? 'white' : '#14264c' }}
                >콩</IsToggleCropDiv>
              </IsToggledButtonsDiv>  
              <IsToggledButtonsDiv>
                <IsToggleCropDiv
                  onClick={()=>onClick('딸기')}
                >딸기</IsToggleCropDiv>
                <IsToggleCropDiv
                  onClick={()=>onClick('사과')}
                >사과</IsToggleCropDiv>
              </IsToggledButtonsDiv>
            </IsToggledDiv>
        )}
        {!isToggled && (<></>)}
    </>
  )
}

export default InputCrop
