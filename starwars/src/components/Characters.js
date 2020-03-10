import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
    background-color: white;
    width: 30%;
    margin-bottom: 25px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 5px;
`;
const CharacterName = styled.h4``;

const Character = (props) => {

    return(
        <CharacterContainer>
            <CharacterName>{props.name}</CharacterName>
        </CharacterContainer>
    )
}

export default Character;