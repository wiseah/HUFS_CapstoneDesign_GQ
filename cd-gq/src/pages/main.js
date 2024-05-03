import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

const Test = styled.p`
    color: ${theme.colors.orange}; // 직접 참조
`;

const Main = () => {
  return (
    <>
      <Test>
        메인 페이지 입니다.
      </Test>
    </>
  );
};

export default Main;
