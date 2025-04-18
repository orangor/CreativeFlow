import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import TaskNavigation from './TaskNavigation';

const AppLayout = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Flex direction="column" minH="100vh">
      <Box
        as="header"
        py={4}
        px={6}
        bg={bgColor}
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Heading as="h1" size="lg">CreativeFlow</Heading>
      </Box>

      <Flex flex={1}>
        <TaskNavigation />
        <Box as="main" flex={1} p={6}>
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AppLayout;