import React, { useState } from 'react';
// eslint-disable-next-line
import styled from 'styled-components';
import { BsFillExclamationCircleFill,BsCaretDownFill ,BsCaretUpFill} from 'react-icons/bs';
import PestContent from './PestContent';

const Container=styled.div`
  display: flex;
  flex-direction: column;

  padding:28px;

  background-color: ${({theme})=>theme.colors.orange};
  color:${({theme})=>theme.colors.white};
  box-shadow:0px 3px 5px #0000002f;

  border-radius: 50px;
`;
const Header=styled.div`
  flex-direction:row;
  justify-content: space-between;
`;

const ToggleDiv=styled.div`
  padding:18px;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  color:${({theme})=>theme.colors.white};
  background-color: transparent;
  border-radius: 50px;
  
  &:hover{
    background-color: ${({theme})=>theme.colors.white};
    color:${({theme})=>theme.colors.orange};
    transition: background-color 0.2s;

    .icon {
      color:${({theme})=>theme.colors.orange};
      transition: color 0.2s;
    }
  }

  .icon{
    width:${({theme})=>theme.icons.downFill};
    height:${({theme})=>theme.icons.downFill};

    margin:auto 0px auto auto;
    color:${({theme})=>theme.colors.white};
  }
`;

const ToggleContent=styled.div`
  flex-direction: column;
  padding: 27px;

  background-color: ${({theme})=>theme.colors.lightorange};
  color:${({theme})=>theme.colors.orange};
  border-radius: 15px;

  font-weight: ${({theme})=>theme.fontsWeights.toggle};
`;


function DealWithPest({onToggle}) {
  const [isToggled, setIsToggled] = useState(false);

  // const handleToggle = () => {
  //   setIsToggled(prevState => !prevState);
  //   onToggle(!isToggled); // 토글 상태를 전달
  // };

  // const handleToggle=()=>{
  //   setIsToggled(prevState=>{
  //     const newState=!prevState;
  //     onToggle(newState);
  //     return newState;
  //   });
  // };

  return (
    <>
      <Container>
        <Header>
          <BsFillExclamationCircleFill />
          톱다리개미허리노린재 대처법
        </Header>
        {/* <ToggleDiv onClick={handleToggle}>
          농약 추천
          {isToggled ?
            <BsCaretUpFill className='icon' />: <BsCaretDownFill className='icon'/>}
        </ToggleDiv>
        {isToggled && (
          <ToggleContent>
            컴포넌트 입니다.
          </ToggleContent>
        )}
        {!isToggled && (<></>)} */}
        {/* test용 컴포넌트 */}
        <PestContent />
      </Container>
    </>
  )
};

export default DealWithPest;
