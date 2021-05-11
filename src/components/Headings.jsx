import { Heading } from '@chakra-ui/layout';

export const MasterHeading = ({ children, ...props }) => (
  <Heading as="h1" size="2xl" my={4} {...props}>
    {children}
  </Heading>
);
export const MainHeading = ({ children, ...props }) => (
  <Heading as="h2" size="xl" mb={4} mt={16} {...props}>
    {children}
  </Heading>
);
