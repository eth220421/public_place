import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa6';

const HambergerBtnWrapper = styled.button`
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

// Layout.tsx로부터 넘어오는 props의 타입 정의
type HambergerBtnProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function HambergerBtn({ onClick }: HambergerBtnProps) {
    return (
        <HambergerBtnWrapper onClick={onClick}>
            <FaBars style={{ width: 30, height: 30, color: 'white' }} />
        </HambergerBtnWrapper>
    );
}

export default HambergerBtn;
