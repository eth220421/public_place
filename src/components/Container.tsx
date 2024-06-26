import React from 'react';
import styled from "styled-components";

// 자식을 품을 수 있도록 해주는 인터페이스
interface ContainerProps {
    children: React.ReactNode;
}

const ContainerDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

function Container({children}: ContainerProps) {
    return (
        <ContainerDiv>
            {children}
        </ContainerDiv>
    );
}

export default Container;