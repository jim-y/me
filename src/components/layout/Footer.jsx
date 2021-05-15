import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Divider, Link as ExternalLink, Flex, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import styled from 'styled-components';

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.gray['400']};
`;

export default function Footer() {
  return (
    <Box maxW={['100%', '100%', '100%', '75%']} fontSize={['2xl', 'md']} mx="auto" mb={20}>
      <Box my={20}>
        <Divider />
      </Box>
      <Flex direction={['column', 'row']} justify="center">
        <Stack pr={[0, 48]} maxW={['xs']} spacing={8}>
          <Link href="/" passHref>
            <FooterLink>Home</FooterLink>
          </Link>
          <Link href="/about" passHref>
            <FooterLink>About</FooterLink>
          </Link>
          <Link href="/blog" passHref>
            <FooterLink>Blog</FooterLink>
          </Link>
        </Stack>

        <Stack mt={[16, 0]} spacing={8}>
          <Box>
            <ExternalLink href="https://twitter.com/attilakling" isExternal>
              <FooterLink>
                <Flex align="center">
                  Twitter&nbsp;
                  <ExternalLinkIcon mx="2px" />
                </Flex>
              </FooterLink>
            </ExternalLink>
          </Box>
          <Box>
            <ExternalLink href="https://github.com/jim-y" isExternal>
              <FooterLink>
                <Flex align="center">
                  GitHub&nbsp;
                  <ExternalLinkIcon mx="2px" />
                </Flex>
              </FooterLink>
            </ExternalLink>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}
