import React,{useState} from 'react';
import styled from 'styled-components';
import { BsCaretDownFill ,
    BsCaretUpFill} from 'react-icons/bs';

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

function PestContent({onToggle}) {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
        onToggle(!isToggled); // 토글 상태를 전달
    };

    return (
        <>
            <ToggleDiv onClick={handleToggle}>
                농약 추천
                {isToggled ? <BsCaretUpFill className='icon' /> : <BsCaretDownFill className='icon' />}
            </ToggleDiv>
            {isToggled && (
                <ToggleContent>
                    컴포넌트의 컴포넌트입니다.
                </ToggleContent>
            )}
            {!isToggled && (<></>)}
        </>
    )
}

export default PestContent;