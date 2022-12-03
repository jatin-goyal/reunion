import { Box } from '@chakra-ui/react';
import React from 'react';
import { useList } from '../context/ListContext';

import Card from './Card';

const Cards = () => {
  const { filteredHouses } = useList();
  return (
    <Box pt={5} display={'flex'} alignItems={'center'} justifyContent="center">
      <Box w="70vw" display={'flex'} flexWrap="wrap">
        {filteredHouses?.map(house => (
          <Card house={house} key={house.houseId} />
        ))}
      </Box>
    </Box>
  );
};

export default Cards;
