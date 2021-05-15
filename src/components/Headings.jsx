import { Heading } from '@chakra-ui/layout';

export const MasterHeading = ({ children, ...props }) => (
  <Heading as="h1" size="2xl" my={4} {...props}>
    {children}
  </Heading>
);

export const MainHeading = ({ children, ...props }) => (
  <Heading as="h2" size="xl" mb={8} mt={24} {...props}>
    {children}
  </Heading>
);

export const PostHeading = ({ children, ...props }) => (
  <Heading as="h4" size="lg" mb={1} {...props}>
    {children}
  </Heading>
);

export const SubtleHeading = ({ children, ...props }) => (
  <Heading as="h4" size="md" mb={4} mt={16} {...props}>
    {children}
  </Heading>
);
