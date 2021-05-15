import { Box, Flex, Stack, Text } from '@chakra-ui/layout';
import Image from 'next/image';
import { PostHeading } from '../Headings';
import { useRouter } from 'next/router';

export default function RecentPosts({ posts }) {
  const router = useRouter();
  return (
    <Stack spacing={8}>
      {posts.map((post) => {
        const cover = post.banner.formats.small;
        return (
          <Flex key={post.id} as="article" cursor="pointer" onClick={() => router.push(`/blog/${post.slug}`)}>
            <Box minW={400} minH={300}>
              <Image src={cover.url} width={400} height={300} alt={post.banner.alternativeText} />
            </Box>
            <Flex align="center" maxH="300px" ml={8}>
              <Box>
                <PostHeading>
                  <Text noOfLines={3} title={post.title}>
                    {post.title}
                  </Text>
                </PostHeading>

                <Flex align="center" mb={4} color="midgray">
                  <Text fontSize="xs" mr={4}>
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'medium'
                    }).format(new Date(post.published_at))}
                  </Text>
                </Flex>

                <Text noOfLines={3}>{post.excerpt}</Text>
              </Box>
            </Flex>
          </Flex>
        );
      })}
    </Stack>
  );
}
