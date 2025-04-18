import { Box, Button, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ContentPage = () => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box>
      <Heading mb={6}>内容创作</Heading>
      
      <Tabs variant="enclosed" mb={8}>
        <TabList>
          <Tab>富文本编辑</Tab>
          <Tab>AI辅助</Tab>
          <Tab>脚本分镜预览</Tab>
        </TabList>
        
        <TabPanels>
          <TabPanel>
            <Box 
              p={6} 
              bg={cardBg} 
              borderRadius="lg" 
              boxShadow="md"
            >
              <Text mb={4}>在此处编辑您的内容：</Text>
              <Textarea 
                placeholder="开始编写您的内容..."
                resize="vertical"
                h="300px"
              />
              <Text mt={2} fontSize="sm" color="gray.500">
                提示：富文本编辑器将在后续版本中集成 @tiptap/react
              </Text>
            </Box>
          </TabPanel>
          
          <TabPanel>
            <Box 
              p={6} 
              bg={cardBg} 
              borderRadius="lg" 
              boxShadow="md"
            >
              <Heading size="md" mb={4}>AI内容生成</Heading>
              <Text mb={4}>
                输入关键词、技巧和心理学原则，AI将为您生成内容建议。
              </Text>
              <Textarea 
                placeholder="输入提示词..."
                resize="vertical"
                h="100px"
                mb={4}
              />
              <Button colorScheme="blue">生成内容</Button>
              
              <Box mt={6} p={4} bg="gray.50" borderRadius="md">
                <Text color="gray.500">AI生成的内容将显示在这里...</Text>
              </Box>
            </Box>
          </TabPanel>
          
          <TabPanel>
            <Box 
              p={6} 
              bg={cardBg} 
              borderRadius="lg" 
              boxShadow="md"
            >
              <Heading size="md" mb={4}>脚本分镜预览</Heading>
              <Text mb={4}>
                您的内容将自动拆分为镜头，您可以拖拽调整顺序。
              </Text>
              
              <Box p={4} bg="gray.50" borderRadius="md" mb={3}>
                <Text fontWeight="bold">镜头 1</Text>
                <Text>开场白：介绍视频主题</Text>
              </Box>
              
              <Box p={4} bg="gray.50" borderRadius="md" mb={3}>
                <Text fontWeight="bold">镜头 2</Text>
                <Text>内容要点一：关键信息展示</Text>
              </Box>
              
              <Box p={4} bg="gray.50" borderRadius="md">
                <Text fontWeight="bold">镜头 3</Text>
                <Text>结尾：总结与号召行动</Text>
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Box mt={8} display="flex" justifyContent="space-between">
        <Button as={Link} to="/tasks/title" variant="outline">
          返回：标题生成
        </Button>
        <Button 
          as={Link} 
          to="/tasks/script"
          colorScheme="blue"
        >
          下一步：脚本规划
        </Button>
      </Box>
    </Box>
  );
};

export default ContentPage;