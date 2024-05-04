import { Link } from 'react-router-dom';
import styled from 'styled-components';
import classNames from 'classnames';

import routes from '../routes';

const Container=styled.div`
    display:flex;
    justify-content:center;
    align-item:center;
`;

const Content=styled.div`
    width:100%;
    max-width:390px;
    min-height:100vh;
    overflow:auto;
    box-shadow:0px 0px 32px #0000002f;
    background-color:${({theme})=>theme.colors.white};
`;

// 01.home Header
const Header=styled.div`
    display:flex;
    align-item:center;
    justify-content:space-between;
    height:40px;
    padding:31px;
`;


const Mobile=()=>{

    return(
        <>
            <Container>
                <Content />
            </Container>
        </>
    )
};

export default Mobile;