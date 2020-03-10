import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Characters.js'
import styled from 'styled-components';

const FilmTitle = styled.h2``;
const FilmContentContainer = styled.div`
	background-color: rgba(255,255,255,0.6);
	padding-top: 25px;
`;
const FilmInfoContainer = styled.div`
	margin-top: 25px;
`;
const CharactersHeading = styled.h3`
	margin-bottom: 25px;
`;
const CharactersContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const FilmInfo = (props) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        if (props.characters.length > 0) {
            props.characters.forEach(url => {
                axios
                    .get(url)
                    .then(response => setCharacters(prevState => [...prevState, response.data]))
                    .catch(err => console.log(err))
            })
        }
    }, [props])

    return(
        <FilmInfoContainer>
			<FilmTitle>Episode {props.episode}: {props.title}</FilmTitle>
			<FilmContentContainer>
				<CharactersHeading>Characters</CharactersHeading>
				<CharactersContainer>
					{characters.map((character, index) => {
						return <Character name={character.name} key={index} />
					})}
				</CharactersContainer>
			</FilmContentContainer>
        </FilmInfoContainer>
    )
}

export default FilmInfo;