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
  useDisclosure,
} from '@chakra-ui/react';

import NavLink from '../shared/NavLink/NavLink';

import s from './AuthNav.module.scss';

const AuthNavBar = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box className={s.navContainer}>
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
        <Text fontSize={'3xl'} fontWeight={'bold'} pl={14} textShadow="1px 1px 2px #000000">
          <Box as="span" color="#000" fontSize={'4xl'}>
            Pin
          </Box>
          <Box as="span">kicks</Box>
        </Text>
      </Flex>
    </Box>
  );
};

export default AuthNavBar;
