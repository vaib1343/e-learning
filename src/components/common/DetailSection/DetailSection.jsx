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
            <S.imageContainer>
                <img
                    aria-hidden
                    src="/assets/images/image-hero-mobile.png"
                    alt="logo image"
                />
            </S.imageContainer>
        </S.container>
    );
};

const S = {
    container: styled.section`
        max-width: 90%;
        margin: auto;
        margin-top: 3.8rem;
        display: flex;
        justify-content: space-around;
        flex-basis: .8 .8;
        align-items: center;
        flex-direction: column;
        @media only screen and (min-width: 800px) {
            flex-direction: row;
        }
    `,
    detailContainer: styled.div`
        width: 100%;
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
        width: 100%;
        img {
            width: 150%;
            @media only screen and (min-width: 800px) {
                content: url("/assets/images/image-hero-tablet@2x.png");
            }
        }
    `,
};

export default DetailSection;
