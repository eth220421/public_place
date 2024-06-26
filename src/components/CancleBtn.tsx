import React from 'react';
import styled from 'styled-components';

import { FaXmark } from "react-icons/fa6";

const CancleBtnWrapper = styled.button`
    width: 50px;
    height: 50px;
    
    position: fixed;
    top: 10px;
    left: 10px;

    background-color: transparent;
    border: none;
    
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

// SideNavigator.tsx에서 넘어오는 props의 타입 정의
type CancleBtnProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CancleBtn ({onClick}: CancleBtnProps) {
    return(
        <CancleBtnWrapper onClick={onClick}>
            <FaXmark style={{ width: 40, height: 40, color: 'white' }}/>
        </CancleBtnWrapper>
    );
}

export default CancleBtn;