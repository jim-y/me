import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Banner({ banner, ...props }) {
  const { url, width, height } = banner.formats.medium;
  return (
    <Box {...props}>
      <Flex direction="column">
        <Box mb={14}>
          <Image
            layout="responsive"
            src={url}
            alt={banner.alternativeText}
            width={width}
            height={height}
          />
          <Center>
            <Text fontSize="xs" dangerouslySetInnerHTML={{ __html: banner.caption }} />
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
