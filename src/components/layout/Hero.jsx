import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Hero() {
  const bg = useColorModeValue('gray.50', 'gray.700');
  return (
    <Box w="full" bg={bg}>
      <Container maxW="container.lg" px={14} py={36}>
        <Flex align="center" justify="space-between">
          <Stack>
            <Box maxW="550px">
              <Heading as="h1" fontSize="56px" fontWeight={700} lineHeight="64px" letterSpacing={2}>
                Quality Software CraftsmanShip
              </Heading>
            </Box>
            <Box maxW="400px" pl="5px">
              <Text fontSize="22px" lineHeight="36px" fontFamily="Poppins">
                Hi, I’m Attila 👋 I&apos;m a Technical Team Leader at ABBYY
              </Text>
            </Box>
          </Stack>
          <Image src="/vis.svg" width={145} height={193} />
        </Flex>
      </Container>
    </Box>
  );
}
