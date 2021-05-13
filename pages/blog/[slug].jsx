import { Box, Code, Flex, Heading, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/layout';
import qs from 'querystring';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import markdownLinkExtractor from 'markdown-link-extractor';
import Subheading from '../../src/components/post/Subheading';
import Banner from '../../src/components/post/Banner';
import Footer from '../../src/components/post/Footer';
import { MasterHeading } from '../../src/components/Headings';
import { useRouter } from 'next/router';
import Spinner from '../../src/components/Spinner';
import path from 'path';

export async function getStaticPaths() {
  const url = path.join(process.env.STRAPI_URL, '/posts');
  console.log({ url });
  const res = await fetch(url);
  const posts = await res.json();
  console.log(JSON.stringify(posts, null, 2));
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const query = qs.stringify({ slug: params.slug, _limit: 1 });
  const res = await fetch(path.join(process.env.STRAPI_URL, `/posts?${query}`));
  const [post] = await res.json();
  const links = markdownLinkExtractor(post.content);
  return {
    props: {
      post,
      links
    },
    revalidate: 1
  };
}

/* eslint-disable no-unused-vars, react/no-children-prop */
const components = {
  h1: ({ node, ...props }) => <Heading as="h3" size="lg" mb={4} mt={16} {...props} />,
  h2: ({ node, ...props }) => <Heading as="h4" size="md" mb={4} mt={16} {...props} />,
  h3: ({ node, ...props }) => <Heading as="h5" size="sm" mb={4} mt={16} {...props} />,
  p: ({ node, children, ...props }) => (
    <Text mb={4} {...props}>
      {children}
    </Text>
  ),
  ul: ({ node, ...props }) => <UnorderedList mb={4} {...props} />,
  ol: ({ node, ...props }) => <OrderedList mb={4} {...props} />,
  li: ({ node, ...props }) => <ListItem {...props} />,
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        showLineNumbers={true}
        customStyle={{ fontSize: '14px' }}
        PreTag="div"
        children={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <Code
        px={1}
        colorScheme="blackAlpha"
        className={className}
        {...props}
        children={String(children).replace(/\n$/, '')}
      />
    );
  }
};
/* eslint-disable no-unused-vars, react/no-children-prop */

export default function Post({ post, links = [] }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <>
      <MasterHeading>{post.title}</MasterHeading>

      <Subheading post={post} my={4} />

      <Banner banner={post.banner} />

      <Box>
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
      </Box>

      {links && links.length > 0 && (
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Resources
          </Heading>
          <Flex direction="column">
            {links.map((link) => (
              <Box key={link}>
                <Link href={link} color="brand.500" isExternal>
                  {link.replace(/http[s]?:\/\//i, '')}
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
      )}

      <Footer my={16} />
    </>
  );
}
