import { Alert, AlertDescription } from '@chakra-ui/alert';
import { Button } from '@chakra-ui/button';
import { EmailIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Box, Divider, Flex, Heading, HStack, LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/layout';
import Image from 'next/image';

export default function Footer({ ...props }) {
  return (
    <Box {...props}>
      <Alert status="info" variant="subtle" colorScheme="blackAlpha" py={8} px={12}>
        <Box flex="1">
          <Heading as="h4" size="md" mt={2} mb={8}>
            Did you find the article helpful?
          </Heading>
          <AlertDescription display="block">
            <HStack
              h={150}
              wrap
              divider={<Divider style={{ borderColor: 'lightgrey' }} orientation="vertical" />}
              spacing={4}
            >
              <Box w="300px">
                <VStack px={12}>
                  <Text>Subscribe to the newsletter</Text>
                  <InputGroup size="sm">
                    <InputLeftElement pointerEvents="none">
                      <EmailIcon />
                    </InputLeftElement>
                    <Input isFullWidth variant="outline" placeholder="john.doe@gmail.com" />
                  </InputGroup>
                  <Button isFullWidth colorScheme="blue" variant="solid" size="sm" onClick={() => {}}>
                    Subscribe
                  </Button>
                </VStack>
              </Box>
              <LinkBox w="300px">
                <LinkOverlay color="brand.500" href="https://buymeacoffee.com/attilakling" isExternal>
                  <Flex align="center" direction="column">
                    <Text>Buy me a coffee</Text>
                    <Box mt={4}>
                      <Image src={'/bmc-logo-no-background.png'} height={60} width={41} alt="bmc link" />
                    </Box>
                  </Flex>
                </LinkOverlay>
              </LinkBox>
            </HStack>
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
}
