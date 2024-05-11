import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 330px;
height: 195px;
background-color: #3EB7EC;
border-radius: 35px;
margin: 36px 30px;
`;

function Weather() {
  return (
    <Container>
      날씨 컴포넌트
    </Container>
  )
}

export default Weather
