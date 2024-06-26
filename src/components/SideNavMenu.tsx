import React from 'react';
import styled from 'styled-components';

const SideNavMenuWrapper = styled.div`
    width: 100%;
    height: 65%;
    
    margin-top: 70%;
    margin-right: 15px;
    
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`

const Details = styled.details`
    width: 150px;
    margin-bottom: 20px;
`;

const Summary = styled.summary`
    font-size: 25px;
    width: fit-content;

    &:hover{
        cursor: pointer;
    }
`;

const Ul = styled.ul`
    padding-left: 40px;
`;

const Li = styled.li`
    width: fit-content;
    
    margin-block: 15px;

    list-style: none;
    font-size: 15px;
    color: #4E4E4E;

    &:hover{
        cursor: pointer;
    }
`;

function SideNavMenu() {
    return (
        <SideNavMenuWrapper>
            <Details open>
                <Summary>&nbsp;&nbsp;Team</Summary>
                <Ul>
                    <Li>팀 찾기</Li>
                    <Li>팀 생성</Li>
                </Ul>
            </Details>
            <Details open>
                <Summary>&nbsp;&nbsp;Board</Summary>
                <Ul>
                    <Li>게시판</Li>
                    <Li>게시글 작성</Li>
                </Ul>
            </Details>
            <Details open>
                <Summary>&nbsp;&nbsp;MyPage</Summary>
                <Ul>
                    <Li>내 정보</Li>
                    <Li>내 정보 수정</Li>
                </Ul>
            </Details>
        </SideNavMenuWrapper>
    );
}

export default SideNavMenu;