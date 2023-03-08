import React from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";

const Navbar = () => {
    return (
        <S.container>
            <h1>skilled</h1>
            <Button>Get Started</Button>
        </S.container>
    );
};

const S = {
    container: styled.header`
        display: flex;
        max-width: 90%;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        margin-top: 1.6rem;

        @media only screen and (min-width: 1440px) {
            max-width: 80%;
        }

        h1 {
            color: black;
            font-size: 2rem;
        }
    `,
};

export default Navbar;
