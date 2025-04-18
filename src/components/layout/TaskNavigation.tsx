import { Box, Button, Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

// 定义任务步骤
const TASK_STEPS = [
  { id: 'keywords', label: '关键词检索', path: '/tasks/keywords' },
  { id: 'title', label: '标题生成', path: '/tasks/title' },
  { id: 'content', label: '内容创作', path: '/tasks/content' },
  { id: 'script', label: '脚本规划', path: '/tasks/script' },
  { id: 'shooting', label: '拍摄管理', path: '/tasks/shooting' },
  { id: 'editing', label: '视频剪辑预览', path: '/tasks/editing' },
];

const TaskNavigation = () => {
  const location = useLocation();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const activeColor = useColorModeValue('blue.500', 'blue.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="nav"
      w={{ base: 'full', md: '250px' }}
      bg={bgColor}
      p={4}
      borderRight="1px"
      borderColor={borderColor}
    >
      <Text fontSize="lg" fontWeight="bold" mb={6}>
        任务导航
      </Text>
      <VStack spacing={2} align="stretch">
        {TASK_STEPS.map((step) => {
          const isActive = location.pathname === step.path;
          return (
            <Button
              key={step.id}
              as={Link}
              to={step.path}
              variant={isActive ? 'solid' : 'ghost'}
              colorScheme={isActive ? 'blue' : 'gray'}
              justifyContent="flex-start"
              leftIcon={
                <Box
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  bg={isActive ? activeColor : 'transparent'}
                />
              }
              _hover={{ bg: isActive ? undefined : 'gray.100' }}
            >
              {step.label}
            </Button>
          );
        })}
      </VStack>
    </Box>
  );
};

export default TaskNavigation;