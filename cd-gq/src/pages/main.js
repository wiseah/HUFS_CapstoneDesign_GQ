import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';

const Test=styled.p`
    color:${({theme})=>theme.colors.orange};
`;

const Main=()=>{

    return(
        <>
            <Test>
                Test입니다.
            </Test>
        </>
    )
};

export default Main;