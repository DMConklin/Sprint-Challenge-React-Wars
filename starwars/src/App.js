import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import FilmInfo from './components/FilmInfo.js';
import styled from 'styled-components';
import bg from './sw-bg.jpg';

const AppContainer = styled.div`
  background: url(${bg}) no-repeat;
  height: 100vh;
  background-size: cover;
  @media (min-width: 1769) {
    background-size: cover;
  }
`;
const MainHeader = styled.h1`
  margin: 0;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [episode, setEpisode] = useState();
  const [title, setTitle] = useState();
  const [characters, setCharacters] = useState(Object);

  useEffect(() => {
    axios
		.get('https://swapi.co/api/films/1/')
		.then(response => {
			setEpisode(response.data.episode_id);
			setTitle(response.data.title);
			setCharacters(response.data.characters);
		})
		.catch(err => console.log(err))
	}, [])

  return (
    <AppContainer className="App">
      <MainHeader className="Header">React Wars</MainHeader>
      <FilmInfo episode={episode} title={title} characters={characters} />
    </AppContainer>
  );
}

export default App;