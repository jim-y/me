import { Box, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import RecentPosts from '../src/components/post/RecentPosts';
import MostPopular from '../src/components/post/MostPopular';
import { getRecentPosts } from '../src/lib/remotes';
import Hero from '../src/components/layout/Hero';

export async function getStaticProps() {
  const recentPosts = await getRecentPosts();
  return { props: { recentPosts } };
}

const SectionTitle = ({ children }) => {
  const bg = useColorModeValue('brand.500', 'brand.200');
  return (
    <Flex position="relative" align="center" mx={14} mt={24} mb={12}>
      <Box w="10px" h="30px" bg={bg} position="absolute" left="-30px"></Box>
      <Text casing="uppercase" letterSpacing={4} fontSize="4xl">
        {children}
      </Text>
    </Flex>
  );
};

export default function Home({ recentPosts }) {
  return (
    <>
      <Hero />
      <Container my={[8, 16, 20, 24]} px={0} maxW="container.lg" h={1440}>
        <SectionTitle>Recent Posts</SectionTitle>
        <Box px={14}>
          <RecentPosts posts={recentPosts} />
        </Box>
        <SectionTitle>Most Popular</SectionTitle>
        <Box px={14}>
          <MostPopular posts={recentPosts} />
        </Box>
      </Container>
    </>
  );
}
