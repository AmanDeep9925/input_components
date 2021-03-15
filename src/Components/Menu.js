import React from "react";
import styled from "styled-components";

const LeftMenu = styled.div`
    font-family: "Noto Sans JP", sans-serif;
`;

const Heading = styled.h1`
    list-style: none;
    padding-left: 0px;
    font-size: 25px;
    text-align: center;
    margin-bottom: 40px;
    span {
        color: #f7542e;
    }
`;

const List = styled.ul`
    list-style: none;
    padding-left: 0px;
    color: #9e9e9e;
    font-weight: bold;
`;

const ListItem = styled.li`
    margin-bottom: 20px;
    padding-left: 40px;
`;

function Menu() {
    return (
        <LeftMenu>
            <Heading>
                <span>Dev</span>Challenges.io
            </Heading>
            <List>
                <ListItem>Typogrpahy</ListItem>
                <ListItem>Grid</ListItem>
                <ListItem>Buttons</ListItem>
                <ListItem className="active">Inputs</ListItem>
            </List>
        </LeftMenu>
    );
}

export default Menu;
