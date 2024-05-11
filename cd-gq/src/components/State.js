import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Worm from '../assets/images/wormRightTop.png';
// 경보 아이콘
import {BsFillExclamationTriangleFill} from 'react-icons/bs';
//화살표 아이콘
import {BsCaretLeftFill,BsCaretRightFill} from 'react-icons/bs';
//상태 얼굴 아이콘
import {
    //제일 위험
    BsFillEmojiDizzyFill,
    //위험
    // BsFillEmojiAngryFill,
    //주의
    // BsFillEmojiNeutralFill,
    //양호
    // BsFillEmojiSmileFill,
    //안전
    // BsFillEmojiHeartEyesFill
} from 'react-icons/bs';
//확인하기 버튼 아이콘
import {BsArrowRightCircleFill} from 'react-icons/bs';

const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    width:330px;

    padding:1.5vw;

    flex-wrap: wrap;
    gap:1.5vw;

    color:${({theme})=>theme.colors.white};
    background-color: ${({theme})=>theme.colors.red};
    border-radius: 35px;
`;
const Header=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap:15px;

    font-size: ${({theme})=>theme.fontSizes.stateHeader};
    font-weight: ${({theme})=>theme.fontsWeights.state};

    .icon{
        width: ${({theme})=>theme.icons.alert};
        height: ${({theme})=>theme.icons.alert};

        margin:0px;
    }
`;
const Body=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width:100%;

    gap: 1vw;
    margin-bottom: 15px;
  
    font-weight: ${({theme})=>theme.fontsWeights.state};

    .arrowIcon{
        width: ${({theme})=>theme.icons.componentLeft};
        height:${({theme})=>theme.icons.componentLeft};
    }
`;
const StateBody=styled.div`
    display: flex;
    flex-direction: column;

    flex-wrap: wrap;
    gap:30px;

    .stateIcon{
        width: ${({theme})=>theme.icons.componentState};
        height: ${({theme})=>theme.icons.componentState};
    }
`;
const StateBodyText=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
    gap:20px;
    .percent{
        font-size: ${({theme})=>theme.fonts.component.percent};
    }
    .state{
        font-size: ${({theme})=>theme.fonts.component.state};
    }
    .name{
        font-size: ${({theme})=>theme.fonts.component.name};
    }
`;
const GotoDetail=styled.button`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:5px;

    margin-top:10px;
    padding:18px 38px;

    width: 100%;

    background-color: ${({theme})=>theme.colors.white};
    border-radius: 50px;
    
    color:${({theme})=>theme.colors.red};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50px;

    font-size: ${({theme})=>theme.fonts.stateButton};
    font-weight: ${({theme})=>theme.fontsWeights.stateButton};

;`

function State(){

    return(
        <>
            <Container>
                <Header>
                    <BsFillExclamationTriangleFill className='icon' />
                    <p>경보</p>
                </Header>
                <Body>
                    <BsCaretLeftFill className='arrowIcon'/>
                    <StateBody>
                        <BsFillEmojiDizzyFill className='stateIcon'/>
                        <StateBodyText>
                            <p className='percent'>89%</p>
                            <p className='state'>위험해요!!</p>
                            <p className='name'>파밤나방</p>
                        </StateBodyText>
                        <Link to='/detail'>
                            <GotoDetail>
                                <BsArrowRightCircleFill />
                                확인하기
                            </GotoDetail>
                        </Link>
                    </StateBody>
                    <BsCaretRightFill className='arrowIcon'/>
                </Body>
            </Container>
        </>
    )
};

export default State;