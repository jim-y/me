import { Box, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import { Grid } from '@chakra-ui/react';
import styled from 'styled-components';

const colors = [
  'white',
  'blue.50',
  'blue.100',
  'blue.200',
  'blue.300',
  'blue.400',
  'blue.500',
  'blue.600',
  'blue.700',
  'blue.800',
  'blue.900'
];

const MyImageWrap = styled.div`
  position: absolute;
  left: 50%;
  margin-left: -128px;
  top: 50%;
  margin-top: -128px;
  & img {
    border-radius: 50%;
    border: ${(props) => `10px solid ${props.theme.colors.blue['50']} !important`};
  }
`;

const rngColor = () => colors[Math.floor(Math.random() * colors.length - 1) + 0];

export default function About() {
  return (
    <>
      <Box position="relative" overflow="hidden" mb={20}>
        <Grid templateColumns="repeat(auto-fill, minmax(73.6px, 1fr))" gap={0} style={{ transform: 'skewY(-45deg)' }}>
          {Array.from({ length: 90 }).map((_, index) => (
            <Box key={index} w="100%" h="73.6px" bg={rngColor} opacity={0.5} />
          ))}
        </Grid>
        <Box position="absolute" top={0} left={0}>
          <Grid templateColumns="repeat(3, 25px)" gap={0}>
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="blue.600" />
            <Box w="100%" h="25px" bg="blue.400" />
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="blue.400" />
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="blue.400" />
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="white" />
          </Grid>
        </Box>

        <Box position="absolute" bottom={0} right={0}>
          <Grid templateColumns="repeat(3, 25px)" gap={0}>
            <Box w="100%" h="25px" bg="purple.100" />
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="purple.600" />
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="purple.400" />
            <Box w="100%" h="25px" bg="purple.100" />
            <Box w="100%" h="25px" bg="white" />
            <Box w="100%" h="25px" bg="purple.600" />
            <Box w="100%" h="25px" bg="white" />
          </Grid>
        </Box>

        <MyImageWrap>
          <Image src="/attilakling_cropped.jpg" width={256} height={256} quality={100} />
        </MyImageWrap>
      </Box>

      <Box>
        <Text>Hi &#9995;! My name is Attila and I&apos;m a Team Leader at ABBYY located at Budapest, Hungary.</Text>
      </Box>
    </>
  );
}
