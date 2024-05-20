import React from 'react';
import styled from 'styled-components';
import { BsFillExclamationCircleFill, BsThermometerSun, BsFillDropletFill, BsCloudFog2Fill } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Container = styled.div`
  width: 330px;
  height: 195px;
  background-color: #3EB7EC;
  border-radius: 35px;
  padding: 10px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
  gap: 1vw;

  .headerIcon {
    margin: 0;
    color: #ffffff;
  }

  .headerText {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1vw;
    color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Line = styled.hr`
  border: none;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
  width: 98%;
  margin: 10px auto;
`;

const Body = styled.div`
.slick-prev{
width: 30px;
height: 30px;
color: #ffffff;
left: -6px;
}
.slick-next{
  width: 30px;
  height: 30px; 
  color: #ffffff;
  right: -6px;
}
.slick-dots li button:before{
  color: white
}
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  width: 80px;

  .weatherIcon {
    margin: 0;
    color: #ffffff;
    width: 42px;
    height: 40px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;

const SlideContainer = styled.div`
  display: flex !important;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding-top: 5px;
  box-sizing: border-box;
`;
// Next 화살표에 대한 스타일 컴포넌트
const NextArrow = styled(BiChevronRight)`

`;

// Prev 화살표에 대한 스타일 컴포넌트
const PrevArrow = styled(BiChevronLeft)`

`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <NextArrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <PrevArrow
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function Weather() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <Header>
        <BsFillExclamationCircleFill className='headerIcon' />
        <span className='headerText'>{year}.{month}.{day} 날씨</span>
      </Header>
      <Line />
      <Body>
        <Slider {...settings}>
          <SlideContainer>
            <WeatherBox>
              <Text>온도</Text>
              <BsThermometerSun className='weatherIcon' />
              <Text>26 / 13</Text>
            </WeatherBox>
            <WeatherBox>
              <Text>습도</Text>
              <BsFillDropletFill className='weatherIcon' />
              <Text>17%</Text>
            </WeatherBox>
            <WeatherBox>
              <Text>풍향</Text>
              <BsCloudFog2Fill className='weatherIcon' />
              <Text>북서</Text>
            </WeatherBox>
          </SlideContainer>
          <SlideContainer>
            <WeatherBox>
              <Text>풍속</Text>
              <BsFillDropletFill className='weatherIcon' />
              <Text>26 / 13</Text>
            </WeatherBox>
            <WeatherBox>
              <Text>강우여부</Text>
              <BsFillDropletFill className='weatherIcon' />
              <Text>17%</Text>
            </WeatherBox>
          </SlideContainer>
        </Slider>
      </Body>
    </Container>
  );
}

export default Weather;
