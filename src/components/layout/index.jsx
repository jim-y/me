import Link from 'next/link';
import { Container, Spacer, Flex, Box, Divider, SimpleGrid, Link as ExternalLink } from '@chakra-ui/react';
import Breadcrumb from './Breadcrumb';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Logo, LinkWrap, FooterLink } from './Styled';
import { AlignCenter } from '../../utils/Styled';

export default function Layout({ children }) {
  return (
    <Container maxW="container.lg">
      <Box
        role="nav"
        p={8}
        sx={{
          position: 'sticky',
          backdropFilter: 'saturate(180%) blur(20px)',
          top: '0',
          zIndex: 2
        }}
      >
        <Flex align="center">
          <Link href="/">
            <Logo>ak</Logo>
          </Link>
          <Spacer />
          <Breadcrumb />
          <Spacer />
          <Link href="/about" passHref>
            <LinkWrap>About</LinkWrap>
          </Link>
          <Link href="/blog" passHref>
            <LinkWrap>Blog</LinkWrap>
          </Link>
        </Flex>
      </Box>

      <Container maxW="container.md">
        <Box mt={14} mb={14}>
          {children}
        </Box>
      </Container>

      <Container maxW="container.md">
        <Box my={20}>
          <Divider />
        </Box>
        <Box w={400} mx="auto" mb={20}>
          <SimpleGrid columns={2} spacing={4}>
            <Box>
              <Link href="/" passHref>
                <FooterLink>Home</FooterLink>
              </Link>
            </Box>

            <Box>
              <ExternalLink href="https://twitter.com/attilakling" isExternal>
                <FooterLink>
                  <AlignCenter>
                    Twitter&nbsp;
                    <ExternalLinkIcon mx="2px" />
                  </AlignCenter>
                </FooterLink>
              </ExternalLink>
            </Box>

            <Box>
              <Link href="/about" passHref>
                <FooterLink>About</FooterLink>
              </Link>
            </Box>

            <Box>
              <ExternalLink href="https://github.com/jim-y" isExternal>
                <FooterLink>
                  <AlignCenter>
                    GitHub&nbsp;
                    <ExternalLinkIcon mx="2px" />
                  </AlignCenter>
                </FooterLink>
              </ExternalLink>
            </Box>
            <Box>
              <Link href="/blog" passHref>
                <FooterLink>Blog</FooterLink>
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </Container>
  );
}
