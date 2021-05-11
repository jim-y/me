import { Box, Text } from '@chakra-ui/layout';
import { MainHeading } from '../../src/components/Headings';
import RecentPosts from '../../src/components/post/RecentPosts';
import { getRecentPosts } from '../../src/lib/remotes';

export async function getStaticProps() {
  const recentPosts = await getRecentPosts();
  return {
    props: { recentPosts },
    revalidate: 1
  };
}

export default function Blog({ recentPosts }) {
  return (
    <>
      <Box mb={10}>
        <MainHeading>Blog</MainHeading>
        <Text>
          You will find various posts about programming topics as well as interesting articles about challanging
          problems I face during my day to day job.
        </Text>
      </Box>

      <RecentPosts posts={recentPosts} />
    </>
  );
}
