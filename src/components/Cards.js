import { Box } from '@chakra-ui/react';
import React from 'react';

import Card from './Card';

const Cards = () => {
  return (
    <Box pt={5} display={'flex'} alignItems={'center'} justifyContent="center">
      <Box w="70vw" display={'flex'} flexWrap="wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Box>
    </Box>
  );
};

export default Cards;
