import React from 'react';

import styled from "styled-components";
import img from '../assets/images/Background.png';

// 자식을 품을 수 있도록 해주는 인터페이스
interface ContainerProps {
    children: React.ReactNode;
}

const MainWrapperDiv = styled.div`
    width: 90%;
    height: 100%;
    background-image: url(${img});
    background-size: cover;
    
    display: flex;
    align-items: center;
    justify-content: right;
    
    padding-right: 10%;
`;

const SloganDiv = styled.div`
    width: 1000px;
    
    color: white;
    font-size: 80px;
    
    text-align: right;
`;

function MainWrapper({children}: ContainerProps) {
    return (
        <MainWrapperDiv>
            <SloganDiv>
                {children}
            </SloganDiv>
        </MainWrapperDiv>
    );
}

export default MainWrapper;