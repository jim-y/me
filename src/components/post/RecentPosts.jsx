import { Box, Flex, Heading, Stack, Text, Link as SimpleLink } from '@chakra-ui/layout';
import Link from 'next/link';
import Image from 'next/image';
import { useBoolean } from '@chakra-ui/hooks';
import { Collapse } from '@chakra-ui/transition';
import { Button } from '@chakra-ui/button';
import { StylelessLink } from '../../utils/Styled';
import { MainHeading } from '../Headings';
import {
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from '@chakra-ui/react';
import { FaTags } from 'react-icons/fa';

const Tags = ({ tags }) => {
  const [first, second, ...rest] = tags;
  const Tag = ({ name }) => (
    <Flex align="center">
      <Icon as={FaTags} boxSize="10px" mr="2px" />
      <SimpleLink mr={2}>
        <Text fontSize="xs">{name}</Text>
      </SimpleLink>
    </Flex>
  );
  return (
    <Flex align="center">
      <Tag name={first.name} />
      {second && <Tag name={second.name} />}
      {rest && rest.length > 0 && (
        <Popover closeOnEsc={true} colorScheme="blackAlpha">
          <PopoverTrigger>
            <Button variant="link">
              <Text fontSize="xs">+{rest.length}&nbsp;more</Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Additional tags</PopoverHeader>
            <PopoverBody>
              {rest.map((tag) => (
                <Tag key={tag.name} name={tag.name} />
              ))}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Flex>
  );
};

const RecentPost = ({ post, ...props }) => {
  const [hasShadow, setHasShadow] = useBoolean();
  const [showMore, setShowMore] = useBoolean();
  const thumbnail = post.banner.formats.thumbnail;
  return (
    <Flex
      {...props}
      as="article"
      p={5}
      borderWidth="1px"
      rounded="md"
      shadow={hasShadow ? 'md' : null}
      onMouseEnter={setHasShadow.on}
      onMouseLeave={setHasShadow.off}
    >
      <Box position="relative" minW="150px" mr={4}>
        <Image src={thumbnail.url} layout="fill" objectFit="cover" alt={post.banner.alternativeText} />
      </Box>

      <Box>
        <Heading as="h4" size="md" mb={1}>
          <Link href={`/blog/${post.slug}`} passHref>
            <StylelessLink style={{ fontWeight: 'inherit' }}>{post.title}</StylelessLink>
          </Link>
        </Heading>

        <Flex align="center">
          <Text fontSize="xs" mr={4}>
            {new Intl.DateTimeFormat('en-US', {
              dateStyle: 'medium'
            }).format(new Date(post.published_at))}
          </Text>
          {post.tags && post.tags.length > 0 && <Tags tags={post.tags} />}
        </Flex>

        <Box mt={2}>
          <Collapse startingHeight={24} in={showMore}>
            <Text>{post.excerpt}</Text>
          </Collapse>
          <Button variant="link" size="xs" onClick={setShowMore.toggle}>
            show {showMore ? 'less' : 'more'}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default function RecentPosts({ posts, ...props }) {
  return (
    <Box {...props}>
      <MainHeading>Recent Posts</MainHeading>
      <Stack spacing={6}>
        {posts.map((post) => (
          <RecentPost key={post.id} post={post} />
        ))}
      </Stack>
    </Box>
  );
}
