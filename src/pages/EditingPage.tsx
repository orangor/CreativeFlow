import { Box, Button, Flex, Heading, Text, VStack, HStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, AspectRatio, useColorModeValue, IconButton, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const EditingPage = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(60); // 假设视频总长度为60秒
  const [isPlaying, setIsPlaying] = useState(false);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const timelineBg = useColorModeValue('gray.100', 'gray.700');
  const clipBg = useColorModeValue('blue.100', 'blue.700');

  // 模拟播放/暂停
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // 格式化时间显示
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Box>
      <Heading mb={6}>视频剪辑预览</Heading>
      
      <Box 
        p={6} 
        bg={cardBg} 
        borderRadius="lg" 
        boxShadow="md"
        mb={6}
      >
        <Heading size="md" mb={4}>预览</Heading>
        
        {/* 视频预览区域 */}
        <AspectRatio ratio={16/9} mb={4} bg="black" borderRadius="md">
          <Box>
            <Text color="white" textAlign="center">
              {isPlaying ? "视频播放中..." : "视频已暂停"}
            </Text>
          </Box>
        </AspectRatio>
        
        {/* 播放控制 */}
        <Box mb={4}>
          <Flex align="center" mb={2}>
            <Button onClick={handlePlayPause} mr={4}>
              {isPlaying ? "暂停" : "播放"}
            </Button>
            <Text>{formatTime(currentTime)} / {formatTime(duration)}</Text>
          </Flex>
          
          <Slider 
            value={currentTime} 
            min={0} 
            max={duration} 
            onChange={(v) => setCurrentTime(v)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        
        {/* 时间轴 */}
        <Box 
          bg={timelineBg} 
          h="80px" 
          borderRadius="md" 
          position="relative"
          p={2}
          mb={4}
        >
          {/* 模拟视频片段 */}
          <Box 
            position="absolute" 
            left="10%" 
            width="30%" 
            h="30px" 
            bg={clipBg} 
            top="25%" 
            borderRadius="sm"
          />
          <Box 
            position="absolute" 
            left="45%" 
            width="20%" 
            h="30px" 
            bg={clipBg} 
            top="25%" 
            borderRadius="sm"
          />
          <Box 
            position="absolute" 
            left="70%" 
            width="15%" 
            h="30px" 
            bg={clipBg} 
            top="25%" 
            borderRadius="sm"
          />
          
          {/* 字幕轨道 */}
          <Box 
            position="absolute" 
            left="15%" 
            width="25%" 
            h="20px" 
            bg="yellow.300" 
            bottom="15%" 
            borderRadius="sm"
            opacity={0.7}
          />
          <Box 
            position="absolute" 
            left="50%" 
            width="30%" 
            h="20px" 
            bg="yellow.300" 
            bottom="15%" 
            borderRadius="sm"
            opacity={0.7}
          />
        </Box>
        
        <Text fontSize="sm">
          提示：实际功能将使用 ffmpeg.wasm 实现客户端剪辑，支持拼接、裁剪、转场等功能
        </Text>
      </Box>
      
      <Flex gap={6} direction={{ base: 'column', md: 'row' }}>
        {/* 字幕设置 */}
        <Box 
          flex={1}
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>字幕设置</Heading>
          
          <VStack spacing={4} align="stretch">
            <Box>
              <Text mb={2}>上传SRT文件</Text>
              <Input type="file" accept=".srt" />
            </Box>
            
            <Box>
              <Text mb={2}>字幕样式</Text>
              <HStack>
                <Button size="sm">字体</Button>
                <Button size="sm">颜色</Button>
                <Button size="sm">大小</Button>
              </HStack>
            </Box>
          </VStack>
        </Box>
        
        {/* 配乐设置 */}
        <Box 
          flex={1}
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>配乐设置</Heading>
          
          <VStack spacing={4} align="stretch">
            <Box>
              <Text mb={2}>上传背景音乐</Text>
              <Input type="file" accept="audio/*" />
            </Box>
            
            <Box>
              <Text mb={2}>音量调节</Text>
              <Slider defaultValue={70} min={0} max={100}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
          </VStack>
        </Box>
      </Flex>
      
      <Flex justify="space-between" mt={8}>
        <Button as={Link} to="/tasks/shooting" colorScheme="gray">
          上一步：拍摄管理
        </Button>
        <Button colorScheme="green">
          导出视频
        </Button>
      </Flex>
    </Box>
  );
};

export default EditingPage;