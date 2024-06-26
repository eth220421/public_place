import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';

import CancleBtn from "./CancleBtn";
import SideNavMenu from "./SideNavMenu";
import LoginStateBtn from "./LoginStateBtn";
import JoinBtn from "./JoinBtn";

// 사이드 네비게이터 열리는 슬라이드 효과
const fadeIn = keyframes`
    from {
        transform: translateX(0%);
    }
    to {
        transform: translateX(-100%);
    }
`;

// 사이드 네비게이터 닫히는 슬라이드 효과
const fadeOut = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

const SideNavWrapper = styled.div<{isClosing: boolean}>`
    width: 270px;
    height: 100%;
    
    position: fixed;
    top: 0;
    left: 0;
    
    background-color: rgba(255, 255, 255, 0.4);
    color: black;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;

    animation: ${({isClosing}) => (isClosing ? fadeIn : fadeOut )} 0.4s ease-in-out;
`;

const SideNavAuth = styled.div`
    margin-bottom: 15%;
    
    width: 130px;
    height: 30px;

    color: #4E4E4E;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

// Layout.tsx로부터 넘어오는 props의 타입 정의
type SideNavProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    isClosing: boolean;
};

function SideNavigator({onClick, isClosing}: SideNavProps) {
    const [userName, setUserName] = useState('');

    const loginLogic = () => {
        if (userName) {
            setUserName('');
            alert('로그아웃 되었습니다.');
        } else {
            const name = prompt('이름을 입력하세요 :');
            if (name == "김영훈") {
                setUserName(name);
                alert('로그인 되었습니다.');
            }
            else {
                alert("이름이 일치하지 않습니다.\n다시 시도해주세요.");
            }
        }
    };

    return (
        <SideNavWrapper isClosing={isClosing}>
            <CancleBtn onClick={onClick} />
            <SideNavMenu />
            <SideNavAuth>
                <LoginStateBtn onClick={loginLogic}>
                    {userName ? '로그아웃' : '로그인'}
                </LoginStateBtn>
                {!userName && <JoinBtn />}
            </SideNavAuth>
        </SideNavWrapper>
    );
}

export default SideNavigator;
