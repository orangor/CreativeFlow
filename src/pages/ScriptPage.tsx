import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ScriptPage = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const timelineBg = useColorModeValue('gray.100', 'gray.700');
  const cardBorder = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box>
      <Heading mb={6}>脚本规划</Heading>
      
      <Box 
        p={6} 
        bg={cardBg} 
        borderRadius="lg" 
        boxShadow="md"
        mb={8}
      >
        <Heading size="md" mb={4}>时间轴</Heading>
        
        {/* 简易时间轴组件 */}
        <Box 
          bg={timelineBg} 
          h="60px" 
          borderRadius="md" 
          position="relative"
          mb={6}
        >
          {/* 时间刻度 */}
          <Flex justify="space-between" px={4} position="absolute" w="full" top="0">
            {[0, 5, 10, 15, 20, 25, 30].map(time => (
              <Text key={time} fontSize="xs">{time}s</Text>
            ))}
          </Flex>
          
          {/* 镜头指示器 */}
          <Box 
            position="absolute" 
            left="10%" 
            width="20%" 
            h="30px" 
            bg="blue.500" 
            top="50%" 
            transform="translateY(-50%)"
            borderRadius="sm"
          />
          
          <Box 
            position="absolute" 
            left="40%" 
            width="30%" 
            h="30px" 
            bg="green.500" 
            top="50%" 
            transform="translateY(-50%)"
            borderRadius="sm"
          />
          
          <Box 
            position="absolute" 
            left="80%" 
            width="15%" 
            h="30px" 
            bg="purple.500" 
            top="50%" 
            transform="translateY(-50%)"
            borderRadius="sm"
          />
        </Box>
        
        {/* 分镜卡片 */}
        <Heading size="md" mb={4}>分镜卡片</Heading>
        
        <Box 
          p={4} 
          borderWidth="1px" 
          borderColor={cardBorder} 
          borderRadius="md"
          mb={4}
        >
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold">镜头 1</Text>
            <Text>0-6秒</Text>
          </Flex>
          <Text fontWeight="medium" mb={2}>画面描述：</Text>
          <Text mb={2}>开场特写，展示产品正面</Text>
          <Text fontWeight="medium" mb={2}>台词：</Text>
          <Text>"今天我要向大家介绍这款革命性的产品..."</Text>
        </Box>
        
        <Box 
          p={4} 
          borderWidth="1px" 
          borderColor={cardBorder} 
          borderRadius="md"
          mb={4}
        >
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold">镜头 2</Text>
            <Text>6-15秒</Text>
          </Flex>
          <Text fontWeight="medium" mb={2}>画面描述：</Text>
          <Text mb={2}>中景，展示产品使用方法</Text>
          <Text fontWeight="medium" mb={2}>台词：</Text>
          <Text>"只需简单三步，就能解决您的问题..."</Text>
        </Box>
        
        <Box 
          p={4} 
          borderWidth="1px" 
          borderColor={cardBorder} 
          borderRadius="md"
        >
          <Flex justify="space-between" mb={2}>
            <Text fontWeight="bold">镜头 3</Text>
            <Text>15-30秒</Text>
          </Flex>
          <Text fontWeight="medium" mb={2}>画面描述：</Text>
          <Text mb={2}>特写，展示产品效果</Text>
          <Text fontWeight="medium" mb={2}>台词：</Text>
          <Text>"看到效果了吗？现在就点击下方链接购买..."</Text>
        </Box>
      </Box>
      
      <Flex justify="space-between">
        <Button colorScheme="teal">导出PDF</Button>
        <Button colorScheme="teal">打印脚本</Button>
      </Flex>

      <Box mt={8} display="flex" justifyContent="space-between">
        <Button as={Link} to="/tasks/content" variant="outline">
          返回：内容创作
        </Button>
        <Button 
          as={Link} 
          to="/tasks/shooting"
          colorScheme="blue"
        >
          下一步：拍摄管理
        </Button>
      </Box>
    </Box>
  );
};

export default ScriptPage;