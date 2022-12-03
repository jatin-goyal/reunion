import {
  Box,
  Button,
  Input,
  Select,
  Spacer,
  Text,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useList } from '../context/ListContext';

const Search = () => {
  const {
    location,
    price,
    rooms,
    setLocation,
    setPrice,
    setRooms,
    filteredHouses,
    setFilteredHouses,
  } = useList();
  const toast = useToast();

  const handleSubmit = () => {
    if (location == '' || rooms == '' || price == '') {
      toast({ title: 'Fill all the fields', status: 'error', timeout: 3000 });
      return;
    }
  };

  return (
    <Box
      pt={5}
      display={'flex'}
      flexDirection="column"
      alignItems={'center'}
      justifyContent="center"
    >
      <Box
        display="flex"
        flex="0.8"
        alignItems="center"
        justifyContent="space-between"
        w={'70vw'}
      >
        <Text fontSize="5xl" fontWeight={'bold'}>
          Search properties to rent
        </Text>
        <Spacer />
        <Input w="20vw" placeholder="Search with search bar"></Input>
      </Box>
      <Box
        display="flex"
        flex="0.8"
        alignItems="center"
        justifyContent="space-around"
        w={'70vw'}
        mt={4}
        border="1px"
        borderRadius={10}
        borderColor={'gray.400'}
        py="4"
        px="2"
      >
        <Box p={2}>
          <Text>Location</Text>
          <Select
            placeholder="Select Location"
            onChange={e => setLocation(e.target.value)}
            name="location"
          >
            <option value="All">All</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharastra">Maharastra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
          </Select>
        </Box>

        <Box p={2}>
          <Text>When</Text>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </Box>
        <Box p={2}>
          <Text>Price</Text>
          <Select
            placeholder="Select Range"
            onChange={e => setPrice(e.target.value)}
          >
            <option value={0}>All</option>
            <option value={1}>Below ₹1999</option>
            <option value={2}> ₹2000 - ₹4999</option>
            <option value={3}> ₹5000 - ₹9999</option>
            <option value={4}>Above ₹10000</option>
          </Select>
        </Box>

        <Box p={2}>
          <Text>Type</Text>
          <Select
            placeholder="Select type"
            onChange={e => setRooms(e.target.value)}
          >
            <option value={0}>All</option>
            <option value={1}>1 BHK</option>
            <option value={2}>2 BHK</option>
            <option value={3}>3 BHK</option>
          </Select>
        </Box>

        <Box>
          <Button
            colorScheme="purple"
            variant="solid"
            fontSize={'lg'}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
