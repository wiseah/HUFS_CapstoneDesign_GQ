// import React, { useState, useCallback } from 'react';
// import styled from 'styled-components';
// import Calendar from 'react-calendar';
// import moment from 'moment';
// import 'react-calendar/dist/Calendar.css';
// import ko from 'date-fns/locale/ko';

// const Container=styled.div`
//     display: flex;
//     flex-direction: column;

//     align-items: center;
//     justify-content: center;
// `;

// function Date(){
//     const [showCalendar, setShowCalendar] = useState<boolean>(false);   // 캘린더 여는 토글
//     const tomorrow = moment().add(1, 'd').toDate(); 	// 내일 날짜 기본값지정을 위해 
//     const [date, setDate] = useState<Date>(tomorrow); 	// date 를 선언하고 기본값을 내일날짜로 지정

//     const onChangeDate = useCallback((date: Date): void | undefined => { // date 변경값을 받아오는 함수
//         if (!date) {return;} // 날짜값이 없을 때 예외처리
//         setDate(date); 	   // 날짜값이 들어오면 date 를 set해준다
//   },[date]);

//     return(
//         <>
//             <Container>
//                 <Calendar
//                     locale={ko} 	// 한국어 달력
//                     months={1}  	// 1달치 달력만 디스플레이
//                     minDate={tomorrow}  // 최소날짜값 내일이면 내일부터 선택가능하다.
//                     date={date}		// 날짜값
//                     onChange={onChangeDate} 	     // onChange 함수
//                     dateDisplayFormat={'yyyy.mm.dd'} // 날짜 포맷값
//                 />
//             </Container>
//         </>
//     )
// };

import React, { useState, useCallback } from 'react';
import moment from 'moment';
import 'moment/locale/ko'; // 한국어 로케일 추가
import Calendar from 'react-calendar'; // react-calendar import
import 'react-calendar/dist/Calendar.css'; // react-calendar 스타일 import
import styled from 'styled-components';

const Container = styled.div`
  /* 필요한 스타일링 추가 */
`;

function DateComponent() {
  const [showCalendar, setShowCalendar] = useState(false); // 캘린더 여는 토글
  const tomorrow = moment().add(1, 'd').toDate(); // 내일 날짜 기본값 지정을 위해
  const [date, setDate] = useState(tomorrow); // date 를 선언하고 기본값을 내일 날짜로 지정

  const onChangeDate = useCallback((date) => {
    // date 변경값을 받아오는 함수
    if (!date) {
      return; // 날짜값이 없을 때 예외처리
    }
    setDate(date); // 날짜값이 들어오면 date 를 set해준다
  }, []);

  return (
    <>
      <Container>
        <Calendar
          locale="ko" // 한국어 달력
          calendarType="ISO 8601"
          minDate={tomorrow} // 최소날짜값 내일이면 내일부터 선택가능하다.
          value={date} // 날짜값
          onChange={onChangeDate} // onChange 함수
          formatLongDate={(locale, date) =>
            moment(date).locale(locale).format('LL')
          } // 선택된 날짜의 로컬 포맷
        />
      </Container>
    </>
  );
}

export default Date;