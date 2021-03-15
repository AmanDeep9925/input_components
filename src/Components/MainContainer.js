import React from "react";
import Menu from "./Menu";
import InputContainer from "./InputContainer";

import styled from "styled-components";

const Maincontainer = styled.div`
    font-family: "Ubuntu Mono", sans-serif;
    height: 100vh;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

function MainContainer() {
    return (
        <Maincontainer>
            <Menu />
            <InputContainer />
        </Maincontainer>
    );
}

export default MainContainer;
