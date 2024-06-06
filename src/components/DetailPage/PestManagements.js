// PestManagement.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fonts.dealWithPest.toggleHeader};
  font-weight: ${({ theme }) => theme.fontsWeights.toggle};
`;

const ToggleDivHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 18px;
  flex-wrap: wrap;
  gap: 3vw;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-radius: 50px;
  font-weight: ${({ theme }) => theme.fontsWeights.dealWithPest.toggleHeader};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white} !important;
    color: ${({ theme }) => theme.colors.orange} !important;
    box-shadow: 0px 3px 5px #0000002f !important;
    transition: background-color 0.2s !important;

    .icon {
      color: ${({ theme }) => theme.colors.orange} !important;
      transition: color 0.2s !important;
    }
  }
  .toggleHeader {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between !important;
    align-items: center;
  }
  .icon {
    width: ${({ theme }) => theme.icons.downFill};
    height: ${({ theme }) => theme.icons.downFill};
    margin: 0px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const ToggleContent = styled.div`
  flex-direction: column;
  padding: 1.5vw;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightorange};
  color: ${({ theme }) => theme.colors.orange};
  border-radius: 15px;
  box-shadow: 0px 3px 5px #0000002f;
  font-weight: ${({ theme }) => theme.fontsWeights.toggle};
  line-height: 1.2;
`;

function PestManagement({ index, management }) {
  const [isToggled01, setIsToggled01] = useState(false);

  const handleToggle01 = () => {
    setIsToggled01(prevState => !prevState);
  };

  return (
    <>
      <Container onClick={handleToggle01}>
        <ToggleDivHeader
          style={{
            background: isToggled01 ? 'white' : 'inherit',
            color: isToggled01 ? '#FF6A4A' : 'inherit'
          }}
        >
          <div className='toggleHeader'>
            대처법 0{index}
            {isToggled01 ?
              <BsCaretUpFill
                style={{
                  color: isToggled01 ? '#FF6A4A' : 'inherit'
                }}
                className='icon' /> :
              <BsCaretDownFill className='icon' />
            }
          </div>
        </ToggleDivHeader>
        {isToggled01 && (
          <ToggleContent>
            <span>{management}</span>
          </ToggleContent>
        )}
      </Container>
    </>
  );
}

export default PestManagement;
