import { Overlay } from '../utils/Styled';
import { Spinner as ChakraSpinner } from '@chakra-ui/react';

export default function Spinner() {
  return (
    <Overlay>
      <ChakraSpinner thickness="4px" speed="0.65s" color="gray.900" size="xl" />
    </Overlay>
  );
}
