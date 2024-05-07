import React,{useState} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import dayjs from 'dayjs';
// import { DateRange } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { ko } from 'react-date-range/dist/locale';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const DateHeader=styled.div`
    padding:16px 16px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    color:rgba(254,88,88,1);
    font-size:${({theme})=>theme.divSizes.inputHeader};
    font-weight:700;
`;

const Button=styled.button`
    padding:4px;

    background:none;
    border:none;
    border-radius:50%

    display:flex;
    align-items:center;
    justify-content:center;

    cursor:pointer;

    &:hover:{
        background-color:${({theme})=>theme.colors.darkblue};
    }

    & > svg {
        width:24px;
        height:24px;
    }

    &.disabled{
        color:rgba(20, 38, 76,0.3);
        pointer-events:none;
    }
`;

const MIN_DATE=dayjs().add(1,'days');
const MAX_DATE=dayjs().add(60,'days');

const RANGE=6;

const DatePicker=({startDate,endDate, onChange})=>{
    const [minDate, setMinDate] = useState(MIN_DATE);
    const [maxDate, setMaxDate] = useState(MAX_DATE);

    // 상난 날짜 선택기 렌더링을 디자인에 맞게 다시 정의합니다.
    const navigatorRenderer=(focusedDate, changeShownDate,props)=>{
        const currentDate=dayjs(focusedDate);
        const minDate=dayjs(props.minDate);
        const maxDate=dayjs(props.maxDate);

        return(
            <>
                <DateHeader onMouseUp={(e)=>e.stopPropagation()}>
                    <Button
                        onClick={()=>changeShownDate(-1,'monthOffset')}
                        className={classNames({
                            disabled:
                                currentDate.month() === minDate.month()&&
                                currentDate.year() === minDate.year(),
                        })}
                    >
                     <IoIosArrowBack />   
                    </Button>
                    <p>{currentDate.format('YYYY.MM')}</p>
                    <Button
                        onClick={()=>changeShownDate(1,'monthOffset')}
                        className={classNames({
                            disabled:
                                currentDate.month() === maxDate.month() &&
                                currentDate.year() === maxDate.year(),
                        })}
                    >
                        <IoIosArrowForward />
                    </Button>
                </DateHeader>
            </>
        );
    };

    const _onChange=(ranges)=>{
        if (ranges===undefined) return;

        const startDate=dayjs(ranges.selection.startDate);
        const endDate=dayjs(ranges.selection.endDate);

        onChange(startDate,endDate);

        if(startDate.isSame(endDate)){
            // 범위 입력을 시작하는 경우 , 범이를 RANGE로 제한
            // 이때, 범위가 MIN_DATE 또는 MAX_DATE를 벗어나지 않도록 합니다
            const _min=startDate.subtract(RANGE,'days');
            const _max=startDate.add(RANGE,'days');

            setMinDate(_min<MIN_DATE ? MIN_DATE:_min);
            setMaxDate(_max>MAX_DATE ? MAX_DATE:_max);
        }else{
            //범위 입력을 종료하는 경우, 범위를 원래대로 되돌립니다.
            setMinDate(MIN_DATE);
            setMaxDate(MAX_DATE);
        }
    };

    return(
        <>
            <DateRangePicker
                showMonthAndYearPickers={false}
                showDateDisplay={false}
                onChange={_onChange}
                dragSelectionEnabled={false}
                ranges={[
                    {
                        startDate:startDate.toDate(),
                        endDate:endDate.toDate(),
                        key:'selection',
                    },
                ]}
                minDate={minDate.toDate()}
                maxDate={maxDate.toDate()}
                local={ko.ko}
                color={`${({theme})=>theme.colors.darkblue}`}
                navigatorRenderer={navigatorRenderer}
                rangeColors={['#FE5858', '#3ecf8e', '#fed14c']}
            />
        </>
    );
};

export default DatePicker;