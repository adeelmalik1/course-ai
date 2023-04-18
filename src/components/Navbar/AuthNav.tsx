import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import NavLink from '../chakraButton/NavLink';

const AuthNavBar = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const gradient = useColorModeValue('linear(to-r, #319795, #38B2AC)', 'linear(to-r, #171923, #1A202C)');

  return (
    <Box bg={gradient} px={4} boxShadow="md">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={<HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={onOpen}
        />
        <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack spacing={4}>
                <NavLink href={'/login'}>Home</NavLink>
                <NavLink href={'#'}>About</NavLink>
                <NavLink href={'#'}>Contact</NavLink>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Text fontSize={'3xl'} fontWeight={'bold'} pl={12} textShadow="1px 1px 2px #000000">
          <Box as="span" color="#FFFFFF">
            Pin
          </Box>
          <Box as="span" color="#319795">
            kicks
          </Box>
        </Text>
      </Flex>
    </Box>
  );
};

export default AuthNavBar;
