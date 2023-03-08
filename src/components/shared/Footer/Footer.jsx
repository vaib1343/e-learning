import React from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";

const Footer = () => {
    return (
        <S.container>
            <S.innerContainer>
                <h1>skilled</h1>
                <Button variant="gradient">Gte started</Button>
            </S.innerContainer>
        </S.container>
    );
};

const S = {
    container: styled.div`
        background-color: #13183f;
    `,
    innerContainer: styled.div`
        max-width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: 3.6rem;

        @media only screen and (min-width: 1440px) {
            max-width: 80%;
        }

        h1 {
            color: white;
        }
    `,
};

export default Footer;
