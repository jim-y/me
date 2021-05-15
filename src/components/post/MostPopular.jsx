import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import { PostHeading } from '../Headings';
import Link from 'next/link';

export default function MostPopular({ posts }) {
  return (
    <Stack spacing={12}>
      {posts.map((post) => (
        <Box key={post.id}>
          <Link href={`/blog/${post.slug}`} passHref>
            <PostHeading as="a">{post.title}</PostHeading>
          </Link>
          <Flex align="center" mb={4} color="midgray">
            <Text fontSize="xs">
              {new Intl.DateTimeFormat('en-US', {
                dateStyle: 'medium'
              }).format(new Date(post.published_at))}
            </Text>
            <Text mx={2} fontWeight="900">
              &middot;
            </Text>
            <Text fontSize="xs">4 min read</Text>
          </Flex>
          <Text>{post.excerpt}</Text>
        </Box>
      ))}
    </Stack>
  );
}
