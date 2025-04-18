import { Box, Button, Heading, Input, SimpleGrid, Tag, Text, VStack, Wrap, WrapItem, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// 模拟关键词数据
const MOCK_KEYWORDS = [
  { id: 1, text: '短视频创作', popularity: 95 },
  { id: 2, text: '自媒体运营', popularity: 90 },
  { id: 3, text: '内容营销', popularity: 85 },
  { id: 4, text: '视频剪辑技巧', popularity: 80 },
  { id: 5, text: '抖音运营', popularity: 88 },
  { id: 6, text: '小红书爆款', popularity: 92 },
  { id: 7, text: 'AI创作', popularity: 78 },
  { id: 8, text: '视频脚本', popularity: 75 },
  { id: 9, text: '流量密码', popularity: 89 },
  { id: 10, text: '内容创业', popularity: 82 },
];

const KeywordsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const tagBg = useColorModeValue('blue.50', 'blue.900');
  const selectedTagBg = useColorModeValue('green.100', 'green.800');

  const toggleKeyword = (id: number) => {
    setSelectedKeywords(prev => 
      prev.includes(id) 
        ? prev.filter(keywordId => keywordId !== id)
        : [...prev, id]
    );
  };

  return (
    <Box>
      <Heading mb={6}>关键词检索</Heading>
      
      <Box mb={8}>
        <Text mb={2}>输入主题词或领域标签：</Text>
        <Input 
          placeholder="例如：短视频、自媒体、营销" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={4}
        />
        <Button colorScheme="blue">搜索热门关键词</Button>
      </Box>

      <Box 
        p={6} 
        bg={cardBg} 
        borderRadius="lg" 
        boxShadow="md"
        mb={6}
      >
        <Heading size="md" mb={4}>热门关键词</Heading>
        <Wrap spacing={3}>
          {MOCK_KEYWORDS.map(keyword => (
            <WrapItem key={keyword.id}>
              <Tag 
                size="lg" 
                borderRadius="full" 
                variant="solid" 
                bg={selectedKeywords.includes(keyword.id) ? selectedTagBg : tagBg}
                color={selectedKeywords.includes(keyword.id) ? 'white' : 'inherit'}
                cursor="pointer"
                onClick={() => toggleKeyword(keyword.id)}
                px={3}
                py={2}
              >
                {keyword.text}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
        <Box 
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>同义/长尾词</Heading>
          <Text color="gray.500">选择关键词后显示相关词</Text>
        </Box>
        
        <Box 
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>趋势和竞争度</Heading>
          <Text color="gray.500">选择关键词后显示趋势图表</Text>
        </Box>
      </SimpleGrid>

      <VStack spacing={4} align="stretch">
        <Heading size="md">已选关键词</Heading>
        {selectedKeywords.length > 0 ? (
          <Wrap spacing={3}>
            {selectedKeywords.map(id => {
              const keyword = MOCK_KEYWORDS.find(k => k.id === id);
              return (
                <WrapItem key={id}>
                  <Tag 
                    size="lg" 
                    borderRadius="full" 
                    variant="solid" 
                    colorScheme="green"
                    cursor="pointer"
                    onClick={() => toggleKeyword(id)}
                  >
                    {keyword?.text}
                  </Tag>
                </WrapItem>
              );
            })}
          </Wrap>
        ) : (
          <Text color="gray.500">尚未选择关键词</Text>
        )}
      </VStack>

      <Box mt={8} textAlign="right">
        <Button 
          as={Link} 
          to="/tasks/title"
          colorScheme="blue" 
          isDisabled={selectedKeywords.length === 0}
        >
          下一步：标题生成
        </Button>
      </Box>
    </Box>
  );
};

export default KeywordsPage;