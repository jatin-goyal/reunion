import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Image,
  Spacer,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import logo from '../images/logo.png';

const NavBar = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="logo" boxSize="120px" objectFit="cover" />
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="ghost" fontSize={'lg'}>
            Rent
          </Button>
          <Button colorScheme="teal" variant="ghost" fontSize={'lg'}>
            Buy
          </Button>
          <Button colorScheme="teal" variant="ghost" fontSize={'lg'}>
            Sell
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="teal"
              variant="ghost"
              fontSize={'lg'}
            >
              Manage Property
            </MenuButton>
            <MenuList>
              <MenuItem>Edit Info</MenuItem>
              <MenuItem>Add Pictures</MenuItem>
              <MenuItem>Change prices</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              colorScheme="teal"
              variant="ghost"
              fontSize={'lg'}
            >
              Resources
            </MenuButton>
            <MenuList>
              <MenuItem>Point one</MenuItem>
              <MenuItem>Point two</MenuItem>
              <MenuItem>Point three</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Box>
      <Spacer />
      <Box>
        <Button mx={2}>Log In</Button>
        <Button colorScheme="teal" variant="solid" mx={2}>
          Sign Up
        </Button>
        <ColorModeSwitcher mx={2} />
      </Box>
    </Box>
  );
};

export default NavBar;
