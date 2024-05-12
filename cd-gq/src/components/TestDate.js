// import React, { useState } from 'react';
// import { DateRange } from 'react-date-range';
// import { Calendar } from "react-date-range";
// import { DayPickerSingleDateController } from 'react-date-range';
// import * as locales from 'react-date-range/dist/locale';

// import styled from 'styled-components';

// // import classNames from 'classnames';
// // import dayjs from 'dayjs';
// import { ko, th } from 'react-date-range/dist/locale';

// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import { Calendar } from 'react-date-range'; // 얘가 캘린더 라이브러리
// import ko from 'date-fns/locale/ko';	     // 날짜 포맷 라이브러리 (한국어 기능을 임포트)
// import moment from 'moment';

// import moment from 'moment';
// // 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
// import 'moment/locale/ko';



// const Container=styled.div`
//     display:flex;
//     justify-content:center;
//     text-align:center;
//     align-items:center ;
//     //전체 Container에서 color 
//     color: ${({theme})=>theme.colors.darkblue};

//     .testCode{
//         background-color:${({theme})=>theme.colors.white};
//         display: flex;
//         flex-direction: column;

//         /* justify-content: center;
//         align-items: center; */

//         width: 100%;
//         border-radius:15px;
//         box-shadow:0px 3px 5px #0000002f;

//         color: ${({theme})=>theme.colors.darkblue};
//     }
// `;

// const TestDate = () => {
//     // const [state, setState] = useState([
//     //     {
//     //         startDate: new Date(),
//     //         endDate: new Date(), // 시작과 끝을 같은 날짜로 설정하여 하루만 선택 가능하게 함
//     //         key: 'selection'
//     //     }
//     // ]);

//     const [locale]=useState('ko');
//     const [selectDate,setSelectDate]=useState(new Date());
    

//     const onChangeDate=(item)=>{
//         setSelectDate(item);
//         console.log(item);
//     }

//     return (
//         <>
//             <Container>
//                 {/* <DateRange
//                     className='testCode'
//                     editableDateInputs={false} // 날짜 입력 불가능하도록 설정
//                     onChange={item => setState([item.selection])}
//                     moveRangeOnFirstSelection={false}
//                     // 얘가 위에 기간을 없애줌
//                     // ranges={state}

//                 /> */}
//                 {/* <Calendar  
//                     onChange={(item)=>onChangeDate(item)}
//                     locale={locales[locale]}
//                     date={selectDate}
//                     color='##0503FF'
//                     dateDisplayFormat='MM.dd.yyyy'
//                 /> */}
//                 <DayPickerSingleDateController />
//             </Container>
//         </>
//     )
// }



import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import ko from 'date-fns/locale/ko';

const StyledCalendar = styled(Calendar)`
  // Calendar에 대한 추가적인 스타일링을 여기에 작성할 수 있습니다.
`;

const TestDate = () => {
  const tomorrow = moment().add(1, 'd').toDate(); // 내일 날짜 기본값 지정
  const [date, setDate] = useState(tomorrow);

  const onChangeDate = useCallback((date) => {
    if (!date) return;
    setDate(date);
  }, []);

  return (
    <>
      <StyledCalendar
        locale={ko}
        months={1}
        minDate={tomorrow}
        date={date}
        onChange={onChangeDate}
        dateDisplayFormat={'yyyy.MM.dd'}
      />
    </>
  );
};

export default TestDate;