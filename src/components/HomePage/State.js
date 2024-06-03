import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 경보 아이콘
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
// 화살표 아이콘
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
// 상태 얼굴 아이콘
import {
  BsFillEmojiDizzyFill,
  BsFillEmojiAngryFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill
} from 'react-icons/bs';
// 확인하기 버튼 아이콘
import { BsArrowRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import getStateInfo from '../../APIs/get/getStateInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 330px;
  padding: 1.5vw;
  flex-wrap: wrap;
  gap: 1.5vw;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 35px;
`;

// 백분율에 따라 배경색 설정하는 함수
const getBackgroundColor = (percent) => {
  if (percent > 74) {
    return '#FF4A4A'; 
  } else if (percent > 49) {
    return '#FF6A4A'; 
  } else if (percent > 24) {
    return '#FFAC4A'; 
  } else {
    return '#2ADEA1'; 
  }
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 15px;
  font-size: ${({ theme }) => theme.fontSizes.stateHeader};
  font-weight: ${({ theme }) => theme.fontsWeights.state};

  .icon {
    width: ${({ theme }) => theme.icons.alert};
    height: ${({ theme }) => theme.icons.alert};
    margin: 0px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1vw;
  margin-bottom: 15px;
  font-weight: ${({ theme }) => theme.fontsWeights.state};

  .arrowIcon {
    width: ${({ theme }) => theme.icons.componentLeft};
    height: ${({ theme }) => theme.icons.componentLeft};
  }
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

const LeftArrow = styled(BsCaretLeftFill)``;
const RightArrow = styled(BsCaretRightFill)``;

function LeftArrowMove(props) {
  const { className, style, onClick } = props;
  return (
    <LeftArrow 
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function RightArrowMove(props) {
  const { className, style, onClick } = props;
  return (
    <RightArrow 
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const StateBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;

  .stateIcon {
    width: ${({ theme }) => theme.icons.componentState};
    height: ${({ theme }) => theme.icons.componentState};
  }
`;

const StateBodyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  .percent {
    font-size: ${({ theme }) => theme.fonts.component.percent};
  }

  .state {
    font-size: ${({ theme }) => theme.fonts.component.state};
  }

  .pestName {
    text-align: center;
    font-size: ${({ theme }) => theme.fonts.component.name};
  }
`;

const GotoDetail = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
  padding: 18px 38px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fonts.stateButton};
  font-weight: ${({ theme }) => theme.fontsWeights.stateButton};
`;

function State({ selectedCrop }) {
  const [pestData, setPestData] = useState([]);

  useEffect(() => {
    const fetchStateData = async () => {
      try {
        const data = await getStateInfo(selectedCrop);
        const pestDataArray = Object.keys(data.percentages).map(key => ({
          name: key,
          percent: data.percentages[key],
          riskLevel: data.riskLevels[key],
        }));
        setPestData(pestDataArray);
      } catch (error) {
        console.error('오류 발생', error);
      }
    };

    if (selectedCrop) {
      fetchStateData();
    }
  }, [selectedCrop]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <BsCaretRightFill />,
    prevArrow: <BsCaretLeftFill />,
  };

  const getIconComponent = (riskLevel) => {
    switch (riskLevel) {
      case '위험':
        return <BsFillEmojiDizzyFill className='stateIcon' />;
      case '주의':
        return <BsFillEmojiAngryFill className='stateIcon' />;
      case '조심':
        return <BsFillEmojiNeutralFill className='stateIcon' />;
      case '괜찮':
        return <BsFillEmojiSmileFill className='stateIcon' />;
      default:
        return null;
    }
  };

  return (
    <>
      <Container>
        <Header>
          <BsFillExclamationTriangleFill className='icon' />
          <p>경보</p>
        </Header>
        <Body>
          <Slider {...settings}>
            {pestData.map(pest => (
              <SlideContainer key={pest.name}>
                <StateBody>
                  {getIconComponent(pest.riskLevel)}
                  <StateBodyText>
                    <p className='percent'>
                      {pest.percent} %
                    </p>
                    <p className='state'>
                      {pest.riskLevel}
                    </p>
                    <p className='pestName'>
                      {pest.name}
                    </p>
                  </StateBodyText>
                  <Link to='/detail'>
                    <GotoDetail style={{ color: getBackgroundColor(pest.percent) }}>
                      <BsArrowRightCircleFill />
                      확인하기
                    </GotoDetail>
                  </Link>
                </StateBody>
              </SlideContainer>
            ))}
          </Slider>
        </Body>
      </Container>
    </>
  );
}

export default State;
