import React from "react";
import styled from "styled-components";

function CourseBox({ name, description, icon }) {
    return (
        <S.courseBox>
            <img src={icon} alt="animation" />
            <h1>{name}</h1>
            <p>{description}</p>
            <S.getStartedButton>Get Started</S.getStartedButton>
        </S.courseBox>
    );
}
const S = {
    courseBox: styled.div`
        position: relative;
        padding: 5.6rem 2.8rem 3.2rem 2.8rem;
        background-color: white;
        border-radius: 1rem;
        p {
            margin-top: 1.6rem;
            line-height: 2.6rem;
            font-weight: 500;
            font-size: 1.6rem;
            color: #83869a;
        }
        img {
            position: absolute;
            top: -2.5rem;
            left: 2.8rem;
        }
    `,
    getStartedButton: styled.button`
        margin-top: 2.4rem;
        background-color: transparent;
        border: 0;
        outline: 0;
        font-size: 1.8rem;
        font-weight: 700;
        color: #f74780;
        line-height: 2.8rem;
    `,
};
export default CourseBox;
