import React from 'react';
import { ChakraProvider, Box, theme, Divider } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
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
