import React, {useState, useEffect} from 'react';

import MainWrapper from "../components/MainWrapper";

// 슬로건 절반
const slogan01 = [
    "Feet on Turf,",
    "Play for Passion,",
    "Link by Sports,"
]

// 슬로건 절반
const slogan02 = [
    "Voices in Surf",
    "Connect for Fun",
    "Unite by words"
]

function Main() {
    const [randomSlogan01, setRandomSlogan01] = useState('');
    const [randomSlogan02, setRandomSlogan02] = useState('');

    useEffect(() => {
        // 슬로건 랜덤 출력을 위한 난수 생성
        const index = Math.floor(Math.random() * slogan01.length);

        setRandomSlogan01(slogan01[index]);
        setRandomSlogan02(slogan02[index]);
    }, []);

    return (
        <MainWrapper> {/* MainPage */}
            {randomSlogan01}
            <br/>
            {randomSlogan02}
        </MainWrapper>
    );
}

export default Main;
