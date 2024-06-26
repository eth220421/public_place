import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import HambergerBtn from "../components/HambergerBtn";
import Container from "../components/Container";
import SideNavigator from "../components/SideNavigator";

function Layout(){
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // 사이드 네비게이터 토글과 애니메이션 효과를 위한 상태 관리 함수
    const toggleSideNav = () => {
        if (isSideNavOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsSideNavOpen(false);
                setIsClosing(false);
            }, 300); // 슬라이드 아웃 애니메이션 시간보다 약간 적게 설정 (동일할 경우 부자연스러운 현상 발생)
        } else {
            setIsSideNavOpen(true);
        }
    };

    return (
        // width: 100%, height: 100%인 div 태그
        <Container>
            {/* 햄버거 버튼과 사이드 네비게이터를 토글 형식으로 구현 */}
            {!isSideNavOpen && <HambergerBtn onClick={toggleSideNav}/>}
            {isSideNavOpen && <SideNavigator onClick={toggleSideNav} isClosing={isClosing}/>}
            <Outlet/> {/* 여러가지 페이지들 */}
        </Container>
    );
}

export default Layout;
