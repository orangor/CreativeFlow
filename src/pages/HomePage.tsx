import { Box, Button, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const bgColor = useColorModeValue('blue.50', 'blue.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box>
      <VStack spacing={8} textAlign="center" py={10}>
        <Heading as="h1" size="2xl">CreativeFlow</Heading>
        <Text fontSize="xl" maxW="2xl">
          自媒体全流程运营支撑工具，帮助您从关键词检索到视频剪辑的全过程
        </Text>
        
        <Box 
          p={8} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
          w="100%"
          maxW="800px"
        >
          <Heading as="h2" size="lg" mb={6}>开始创建新任务</Heading>
          <Text mb={6}>按照以下步骤完成您的自媒体内容创作：</Text>
          
          <VStack spacing={4} align="stretch">
            <Box p={4} bg={bgColor} borderRadius="md">
              <Text fontWeight="bold">1. 关键词检索</Text>
              <Text>发现热门话题和趋势关键词</Text>
            </Box>
            
            <Box p={4} bg={bgColor} borderRadius="md">
              <Text fontWeight="bold">2. 标题生成</Text>
              <Text>创建吸引人的内容标题</Text>
            </Box>
            
            <Box p={4} bg={bgColor} borderRadius="md">
              <Text fontWeight="bold">3. 内容创作</Text>
              <Text>使用AI辅助编写内容</Text>
            </Box>
            
            <Box p={4} bg={bgColor} borderRadius="md">
              <Text fontWeight="bold">4. 脚本规划</Text>
              <Text>设计视频脚本和分镜</Text>
            </Box>
            
            <Box p={4} bg={bgColor} borderRadius="md">
              <Text fontWeight="bold">5. 拍摄管理</Text>
              <Text>管理视频拍摄过程</Text>
            </Box>
            
            <Box p={4} bg={bgColor} borderRadius="md">
              <Text fontWeight="bold">6. 视频剪辑预览</Text>
              <Text>编辑和预览最终视频</Text>
            </Box>
          </VStack>
          
          <Button 
            as={Link} 
            to="/tasks/keywords"
            colorScheme="blue" 
            size="lg" 
            mt={8}
          >
            开始新任务
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default HomePage;