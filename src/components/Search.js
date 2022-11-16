import { Box, Button, Input, Select, Spacer, Text } from '@chakra-ui/react';
import React from 'react';

const Search = () => {
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
      >
        <Box p={2}>
          <Text>Location</Text>
          <Select placeholder="Select Location">
            <option value="option1">Delhi</option>
            <option value="option2">Maharastra</option>
            <option value="option3">Karnataka</option>
            <option value="option3">West Bengal</option>
            <option value="option3">Tamil Nadu</option>
            <option value="option3">Gujrat</option>
            <option value="option3">Uttar Pradesh</option>
            <option value="option3">Haryana</option>
            <option value="option3">Rajasthan</option>
            <option value="option3">Utrakhand</option>
          </Select>
        </Box>

        <Box p={2}>
          <Text>When</Text>
          <Input placeholder="Select Date and Time" size="md" type="date" />
        </Box>
        <Box p={2}>
          <Text>Price</Text>
          <Select placeholder="Select Range">
            <option value="option1">Below ₹1999</option>
            <option value="option2"> ₹2000 - ₹4999</option>
            <option value="option2"> ₹5000 - ₹9999</option>
            <option value="option3">Above ₹10000</option>
          </Select>
        </Box>
        <Box p={2}>
          <Text>Type</Text>
          <Select placeholder="Select type">
            <option value="option1">1 BHK</option>
            <option value="option2">2 - 4 BHK</option>
            <option value="option3">Above 4 BHK</option>
          </Select>
        </Box>
        <Box>
          <Button colorScheme="purple" variant="solid" fontSize={'lg'}>
            Search
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
