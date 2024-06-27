import React from 'react';
import styled from "styled-components";

const LoginStateBtnWrapper = styled.button`
    width: fit-content;
    height: fit-content;
    padding-inline: 10px;

    color: #4E4E4E;
    background-color: transparent;
    border: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        cursor: pointer;
        color: whitesmoke;
    }
`

type LoginStateBtnProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
}

function LoginStateBtn({onClick, children}: LoginStateBtnProps) {
    return (
        <LoginStateBtnWrapper onClick={onClick}>
            {children}
        </LoginStateBtnWrapper>
    );
}

export default LoginStateBtn;