import { Box, Button, Checkbox, Heading, Radio, RadioGroup, SimpleGrid, Stack, Text, Textarea, VStack, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// 模拟标题数据
const MOCK_TITLES = [
  { id: 1, text: '10个短视频创作技巧，让你的内容瞬间提升10倍曝光！' },
  { id: 2, text: '自媒体运营必学：从0到1打造爆款内容的秘密' },
  { id: 3, text: '内容创作者必看！这些AI工具能让你效率翻倍' },
  { id: 4, text: '学会这5个视频剪辑技巧，新手也能做出高质量短视频' },
  { id: 5, text: '揭秘顶级自媒体的内容策划流程，太实用了！' },
];

const TitlePage = () => {
  const [selectedTitle, setSelectedTitle] = useState<number | null>(null);
  const [userProfile, setUserProfile] = useState('general');
  const [psychologyModel, setPsychologyModel] = useState('curiosity');
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const highlightBg = useColorModeValue('green.50', 'green.900');

  return (
    <Box>
      <Heading mb={6}>标题生成</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
        <Box 
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>配置参数</Heading>
          
          <VStack align="stretch" spacing={4}>
            <Box>
              <Text fontWeight="bold" mb={2}>用户画像</Text>
              <RadioGroup value={userProfile} onChange={setUserProfile}>
                <Stack direction="column">
                  <Radio value="general">普通用户</Radio>
                  <Radio value="creator">内容创作者</Radio>
                  <Radio value="business">企业账号</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            
            <Box>
              <Text fontWeight="bold" mb={2}>心理触发点</Text>
              <RadioGroup value={psychologyModel} onChange={setPsychologyModel}>
                <Stack direction="column">
                  <Radio value="curiosity">好奇心</Radio>
                  <Radio value="fomo">错失恐惧</Radio>
                  <Radio value="reward">即时奖励</Radio>
                  <Radio value="social">社交认同</Radio>
                </Stack>
              </RadioGroup>
            </Box>
            
            <Box>
              <Text fontWeight="bold" mb={2}>表达手法</Text>
              <Stack spacing={2}>
                <Checkbox>数字列表</Checkbox>
                <Checkbox>问题式</Checkbox>
                <Checkbox>对比式</Checkbox>
                <Checkbox>故事式</Checkbox>
              </Stack>
            </Box>
          </VStack>
          
          <Button colorScheme="blue" mt={6} w="full">
            生成标题
          </Button>
        </Box>
        
        <Box>
          <Heading size="md" mb={4}>自定义标题</Heading>
          <Textarea 
            placeholder="输入您的自定义标题..." 
            resize="vertical"
            h="200px"
          />
          <Button colorScheme="blue" mt={4} size="sm">
            添加到候选
          </Button>
        </Box>
      </SimpleGrid>

      <Box 
        p={6} 
        bg={cardBg} 
        borderRadius="lg" 
        boxShadow="md"
        mb={8}
      >
        <Heading size="md" mb={4}>候选标题</Heading>
        <VStack spacing={3} align="stretch">
          {MOCK_TITLES.map(title => (
            <Box 
              key={title.id} 
              p={3} 
              borderRadius="md" 
              bg={selectedTitle === title.id ? highlightBg : undefined}
              borderWidth={1}
              borderColor={selectedTitle === title.id ? 'green.500' : 'gray.200'}
              cursor="pointer"
              onClick={() => setSelectedTitle(title.id)}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text>{title.text}</Text>
              <Button 
                size="sm" 
                colorScheme={selectedTitle === title.id ? 'green' : 'gray'}
                variant={selectedTitle === title.id ? 'solid' : 'outline'}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedTitle(title.id);
                }}
              >
                {selectedTitle === title.id ? '已选择' : '选择'}
              </Button>
            </Box>
          ))}
        </VStack>
      </Box>

      <Box mt={8} display="flex" justifyContent="space-between">
        <Button as={Link} to="/tasks/keywords" variant="outline">
          返回：关键词检索
        </Button>
        <Button 
          as={Link} 
          to="/tasks/content"
          colorScheme="blue" 
          isDisabled={selectedTitle === null}
        >
          下一步：内容创作
        </Button>
      </Box>
    </Box>
  );
};

export default TitlePage;