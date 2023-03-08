import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const DetailSection = () => {
    return (
        <S.container>
            <S.detailContainer>
                <h1>Maximize skill, minimize budget</h1>
                <p>
                    Our modern courses across a range of in-demand skills will
                    give you the knowledge you need to live the life you want.
                </p>
                <Button variant="gradient">Get Started</Button>
            </S.detailContainer>
            <S.imageContainer></S.imageContainer>
        </S.container>
    );
};

const S = {
    container: styled.section`
        max-width: 90%;
        margin: auto;
        margin-top: 3.8rem;


        @media only screen and (min-width: 800px) {
            max-width: 90%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @media only screen and (min-width: 1440px) {
            max-width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;

        }
    `,
    detailContainer: styled.div`
        max-width: 100%;
        margin-bottom: 4.6rem;
        @media only screen and (min-width: 800px) {
            max-width: 39.8rem;
        }
        @media only screen and (min-width: 1440px) {
            max-width: 45.7rem;

        }
        h1 {
            font-size: 4rem;
            line-height: 4rem;
            font-weight: 800;
            margin-bottom: 2.6rem;
        }

        p {
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 2.6rem;
            color: #83869a;
            margin-bottom: 2.4rem;
        }
    `,

    imageContainer: styled.div`
        background-image: url("/assets/images/image-hero-mobile.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
        position: static;
        width: auto;
        height: 38rem;
        margin-top: 6.1rem;

        @media only screen and (min-width: 800px) {
            background-image: url("/assets/images/image-hero-tablet.png");
            background-position: center;
            background-size: contain;
            position: absolute;
            width: 64rem;
            height: 64rem;
            top: -16rem;
            right: -27rem;
        }

        @media only screen and (min-width: 800px) {
            background-image: url("/assets/images/image-hero-desktop.png");
            background-position: center;
            background-size: contain;
            position: absolute;
            width: 99.1rem;
            height: 93.6rem;
            top: -27rem;
            right: -30.5rem;
        }
    `,
};

export default DetailSection;
