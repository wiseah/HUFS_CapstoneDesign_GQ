import React,{useState} from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function ReactDatepicker(){
    // const [selectedDate,setSelectedDate]=useState(new Date());
    const [startDate, setStartDate] = useState(new Date());

    return(
        <>
            <Container>
                {/* <DatePicker 
                    dateFormat={'yyyy.MM.dd'}
                    shouldCloseOnSelect
                    minDate={new Date('2000-01-01')}
                    maxDate={new Date()}
                    selected={selectedDate}
                    onChange={(date)=>setSelectedDate(date)}
                /> */}
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    inline
                />
            </Container>
        </>
    )
};

export default ReactDatepicker;