import React from "react";
import styled from "styled-components";

const Button = ({ children, variant = "default" }) => {
    return <S.button data-variant={variant}>{children}</S.button>;
};

const S = {
    button: styled.button`
        border-radius: 3rem;
        border: 0px;
        outline: 0px;
        padding: 1.1rem 2.4rem;
        background-color: #13183f;
        color: white;
        font-weight: 700;
        line-height: 2.8rem;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover {
            background-color: #666ca3;
        }

        &[data-variant="gradient"] {
            background: linear-gradient(rgb(240, 42, 166), rgb(255, 111, 72));

            &:hover {
                opacity: 0.5;
            }
        }
    `,
};

export default Button;
