import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, theme, Divider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Cards from './components/Cards';
import { useList } from './context/ListContext';

function App() {
  const { houses, setHouses, filteredHouses, setFilteredHouses } = useList();

  useEffect(() => {
    fetch('/property.json')
      .then(res => res.json())
      .then(data => {
        setHouses(data.houses);
        setFilteredHouses(data.houses);
        console.log(filteredHouses);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <NavBar />
        <Divider />
        <Search />
        <Cards />
      </Box>
    </ChakraProvider>
  );
}

export default App;

// If you want to use coloo switcher, you can add this component
// <ColorModeSwitcher justifySelf="flex-end" />
