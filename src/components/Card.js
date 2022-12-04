import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Image } from '@chakra-ui/react';

function Card({ house }) {
  return (
    <Box
      w="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      m="4"
      cursor={'pointer'}
    >
      <Image src={house.imageUrl} alt={house.imageAlt} />

      <Box p="6">
        <Box>
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Popular
          </Badge>
          {'  '}₹{house.housePrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / month
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {house.title}
        </Box>
        <br />
        <Box
          display="flex"
          alignItems="baseline"
          flexDirection={'column-reverse'}
        >
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {house.state} &bull; {house.baths} baths &bull; {house.beds} beds
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < house.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {house.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
