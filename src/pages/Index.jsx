import { Box, Container, Flex, Text, VStack, Link, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>
            About
          </Link>
        </Flex>
      </Flex>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;