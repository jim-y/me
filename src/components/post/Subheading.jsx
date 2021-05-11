import { Avatar } from "@chakra-ui/avatar";
import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";

export default function Subheading({ post, ...props }) {
  return (
    <Box {...props}>
        <Flex align="center">
          <Avatar
            size="xs"
            name="Attila Kling"
            src="https://www.gravatar.com/avatar/d031f0ba7d6681f1df621bb584848f7c?d=identicon"
          />
          &nbsp;
          <Text fontSize="sm">Attila Kling&nbsp;|&nbsp;</Text>
          <Text fontSize="sm">
            <CalendarIcon boxSize={3} />
            &nbsp;
            {new Intl.DateTimeFormat('en-US', {
              dateStyle: 'medium'
            }).format(new Date(post.published_at))}
          </Text>
        </Flex>
      </Box>
  )
}