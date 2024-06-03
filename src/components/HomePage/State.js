import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Worm from '../../assets/images/wormRightTop.png';
import StateData from '../../db/State.json';

// 경보 아이콘
import {BsFillExclamationTriangleFill} from 'react-icons/bs';
//화살표 아이콘
import {BsCaretLeftFill,BsCaretRightFill} from 'react-icons/bs';
//상태 얼굴 아이콘
import {
    //제일 위험
    BsFillEmojiDizzyFill,
    //위험
    BsFillEmojiAngryFill,
    //주의
    BsFillEmojiNeutralFill,
    //양호
    BsFillEmojiSmileFill
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
    .pestName{
        text-align: center;
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
    // api 로컬 스토리지에 저장해보기
    // const [stateData,setStateData]=useState({
    //     percent:'89%',
    //     state:'위험해요!!',
    //     name:'파밤나방'
    // })
    // useEffect(()=>{
    //     const storedStateData=localStorage.getItem(stateData);
    //     if(storedStateData) {
    //         setStateData(JSON.parse(storedStateData));
    //     }
    //     // console.log(stateData);
    // },[])
    // useEffect(()=>{
    //     localStorage.setItem('stateData',JSON.stringify(stateData));
    // },[stateData]);
    // api 코드 끝

    let state='';
    let statePercent=`${StateData.percent}`;
    let stateIcon='';
    // percent에 따른 state 상태 결정
    const setState=()=>{
        if (statePercent>74 && statePercent<101){
            state='위험해요!'
        } else if (statePercent>49 && statePercent<75){
            state='주의가 필요해요!'
        } else if (statePercent>24 && statePercent<50){
            state='조심해볼까요?'
        } else if (statePercent>0 && statePercent<25){
            state='괜찮아요!'
        }
    }

    // state 상태에 따른 stateIcon 변경
    const setStateIcon=()=>{
        if (state === '위험해요!'){
            stateIcon='BsFillEmojiDizzyFill'
        } else if (state === '주의가 필요해요!'){
            stateIcon='BsFillEmojiAngryFill'
        } else if (state === '조심해볼까요?'){
            stateIcon='BsFillEmojiNeutralFill'
        } else if (state === '괜찮아요!'){
            stateIcon='BsFillEmojiSmileFill'
        } else{
            console.error('stateIcon error')
        }
    }

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
                        <BsFillEmojiDizzyFill 
                            className='stateIcon'/>
                        <StateBodyText>
                            <p 
                                className='percent'
                                // json Data
                                value={StateData.percent}
                                >
                                    {StateData.percent} %
                                    </p>
                            <p 
                                className='state'
                                // json Data
                                // value={StateData.state}

                                // test code
                                value={state}
                                >
                                    {/* {StateData.state} */}
                                    {state}
                                    </p>
                            <p 
                                className='pestName'
                                value={StateData.pestName}
                                >
                                    {StateData.pestName}
                                    </p>
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