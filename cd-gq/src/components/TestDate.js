import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import styled from 'styled-components';

import classNames from 'classnames';
import dayjs from 'dayjs';
import { ko, th } from 'react-date-range/dist/locale';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import { addDays } from 'date-fns';

// const TestDate=()=>{
//     const [state, setState] = useState([
//         {
//           startDate: new Date(),
//           endDate: null,
//           key: 'selection'
//         }
//       ]);
      
//     return(
//         <>
//             <Container>
//                 <DateRange
//                     editableDateInputs={true}
//                     onChange={item => setState([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     ranges={state}
//                 />
//             </Container>
            
//         </>
//     )
// }

const Container=styled.div`
    display:flex;
    justify-content:center;
    text-align:center;
    align-item:center;

    // color:${({theme})=>theme.colors.mainPageColor};
    // background-color:${({theme})=>theme.colors.darkblue};

    .testCode{
        // background-color:${({theme})=>theme.colors.white};
        background-color:${({theme})=>theme.colors.yellow};
        border-radius:15px;
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
                    ranges={state}
                />
            </Container>

        </>
    )
}


export default TestDate;