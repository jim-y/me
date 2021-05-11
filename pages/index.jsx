import { Text, Link, Box } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import styled from 'styled-components';
import RecentPosts from '../src/components/post/RecentPosts';
import { getRecentPosts } from '../src/lib/remotes';
import { MasterHeading } from '../src/components/Headings';

export async function getStaticProps() {
  const recentPosts = await getRecentPosts();
  return { props: { recentPosts } };
}

const FlexBox = styled.span`
  display: inline-flex;
  align-items: center;
`;

export default function Home({ recentPosts }) {
  return (
    <>
      <Box>
        <MasterHeading>Hi, I&apos;m Attila Kling</MasterHeading>
        <Text>
          I&apos;m a Tech &amp; Team Lead at&nbsp;
          <Link color="brand.500" href="https://abbyy.com" isExternal>
            <FlexBox>
              ABBYY&nbsp;
              <ExternalLinkIcon mx="2px" />
            </FlexBox>
          </Link>
          . While managing 6 talented developers I spend my day planning business solutions, assembling feature designs,
          doing Code Reviews and sometimes I have time to commit some stuff :)
        </Text>
      </Box>

      <RecentPosts posts={recentPosts} />
    </>
  );
}
