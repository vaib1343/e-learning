import React from "react";
import styled from "styled-components";
import CourseBox from "../../shared/CourseBox/CourseBox";

const courses = [
    {
        name: "Animation",
        description:
            "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
        icon: "/assets/images/icon-animation.svg",
    },
    {
        name: "Design",
        description:
            "Create beautiful, usable interfaces to help shape the future of how the web looks.",
        icon: "/assets/images/icon-design.svg",
    },
    {
        name: "Photography",
        description:
            "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.",
        icon: "/assets/images/icon-photography.svg",
    },
    {
        name: "Crypto",
        description:
            "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.",
        icon: "/assets/images/icon-crypto.svg",
    },
    {
        name: "Business",
        description:
            "A step-by-step playbook to help you start, scale, and sustain your business without outside investment.",
        icon: "/assets/images/icon-business.svg",
    },
];

function CourseSection() {
    return (
        <S.container>
            <S.innerContainer>
                <S.gradientBox>
                    Check out our most popular courses!
                </S.gradientBox>
                {courses.map((course) => {
                    return <CourseBox key={course.name} {...course} />;
                })}
            </S.innerContainer>
        </S.container>
    );
}

const S = {
    container: styled.div`
        background: linear-gradient(180deg, #ffffff 0%, #f0f1ff 100%);
        padding-bottom: 8rem;
    `,
    innerContainer: styled.div`
        max-width: 90%;
        margin: auto;
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 4rem;
        @media only screen and (min-width: 800px) {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (min-width: 1440px) {
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 80%;
        }
    `,
    gradientBox: styled.div`
        background: linear-gradient(
            180deg,
            rgb(240, 42, 166) 0%,
            rgb(255, 111, 72) 100%
        );
        color: white;
        font-weight: 800;
        font-size: 2.4rem;
        line-height: 3.2rem;
        padding: 2rem;
        border-radius: 1rem;
    `,
};

export default CourseSection;
