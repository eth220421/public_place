import React from 'react';
import styled from "styled-components";

const JoinBtnWrapper = styled.button`
    width: fit-content;
    height: fit-content;
    padding-inline: 10px;

    color: #4E4E4E;
    background-color: transparent;
    border: none;
    border-left: 1px solid #4E4E4E;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
        color: whitesmoke;
    }
`

function JoinBtn() {
    return (
        <JoinBtnWrapper>
            회원가입
        </JoinBtnWrapper>
    );
}

export default JoinBtn;