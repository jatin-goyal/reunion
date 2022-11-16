import { StarIcon } from '@chakra-ui/icons';
import { Badge, Box, Image } from '@chakra-ui/react';

function Card() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home',
    address: 'ab-1, Chandni chowk, Delhi, 110001',
    formattedPrice: '1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" m="4">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box>
          ₹{property.formattedPrice}
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
          {property.title}
        </Box>

        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Popular
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
