import { Box, Flex, HStack, Spacer } from '@chakra-ui/layout';
import Link from 'next/link';
import { Logo } from './Styled';
import { useEffect, useRef, useState } from 'react';
import { useViewportScroll } from 'framer-motion';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavLink = styled.a`
  font-weight: ${({ asPath, href }) => (asPath === href ? '600' : 400)};
`;

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');
  const color = useColorModeValue('gray.600', 'white');
  const headerRef = useRef();
  const [scrY, setScrY] = useState(0);
  const { height = 0 } = (headerRef.current && headerRef.current.getBoundingClientRect()) || {};
  const { scrollY } = useViewportScroll();
  const isScrollThreshold = scrY > height;
  const router = useRouter();

  useEffect(() => {
    return scrollY.onChange(() => setScrY(scrollY.get()));
  }, [scrollY]);

  return (
    <>
      <Box h="20px"></Box>
      <Box
        ref={headerRef}
        as="header"
        w="full"
        position="sticky"
        top={0}
        left={0}
        py={4}
        bg={bg}
        color={color}
        zIndex="sticky"
        shadow={isScrollThreshold ? 'sm' : undefined}
        transition="box-shadow 0.2s, background-color 0.2s"
      >
        <Box maxW="container.lg" m="auto">
          <Flex align="center">
            <Link href="/">
              <Logo>ak</Logo>
            </Link>
            <Spacer />
            <HStack spacing={12} shouldWrapChildren fontSize="lg">
              <Link href="/blog" passHref>
                <NavLink asPath={router.asPath}>Blog</NavLink>
              </Link>
              <Link href="/about" passHref>
                <NavLink asPath={router.asPath}>About</NavLink>
              </Link>
              <Flex cursor="pointer" p={2} onClick={toggleColorMode} justify="center">
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Flex>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
