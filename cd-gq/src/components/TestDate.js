import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import styled from 'styled-components';

import classNames from 'classnames';
import dayjs from 'dayjs';
import { ko, th } from 'react-date-range/dist/locale';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Container=styled.div`
    display:flex;
    justify-content:center;
    text-align:center;
    align-items:center ;
    //전체 Container에서 color 
    color: ${({theme})=>theme.colors.darkblue};

    .testCode{
        background-color:${({theme})=>theme.colors.white};
        display: flex;
        flex-direction: column;

        /* justify-content: center;
        align-items: center; */

        width: 100%;
        border-radius:15px;
        box-shadow:0px 3px 5px #0000002f;
    }
`;

const TestDate = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(), // 시작과 끝을 같은 날짜로 설정하여 하루만 선택 가능하게 함
            key: 'selection'
        }
    ]);

    return (
        <>
            <Container>
                <DateRange
                    className='testCode'
                    editableDateInputs={false} // 날짜 입력 불가능하도록 설정
                    onChange={item => setState([item.selection])}
                    moveRangeOnFirstSelection={false}
                    // 얘가 위에 기간을 없애줌
                    ranges={state}

                />
            </Container>

        </>
    )
}


export default TestDate;