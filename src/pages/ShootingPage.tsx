import { Box, Button, Flex, Heading, Text, VStack, HStack, Input, IconButton, useColorModeValue, AspectRatio } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ShootingPage = () => {
  const [cameraActive, setCameraActive] = useState(false);
  const [recordedClips, setRecordedClips] = useState<string[]>([]);
  
  const cardBg = useColorModeValue('white', 'gray.800');
  const clipBg = useColorModeValue('gray.50', 'gray.700');

  // 模拟开启摄像头
  const handleToggleCamera = () => {
    setCameraActive(!cameraActive);
  };

  // 模拟录制片段
  const handleRecordClip = () => {
    if (cameraActive) {
      setRecordedClips([...recordedClips, `片段 ${recordedClips.length + 1}`]);
    }
  };

  return (
    <Box>
      <Heading mb={6}>拍摄管理</Heading>
      
      <Flex direction={{ base: 'column', lg: 'row' }} gap={6}>
        {/* 左侧：摄像头预览 */}
        <Box 
          flex={2}
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>摄像头预览</Heading>
          
          <AspectRatio ratio={16/9} mb={4} bg="black" borderRadius="md">
            <Box>
              {cameraActive ? (
                <Text color="white" textAlign="center">摄像头已开启</Text>
              ) : (
                <Text color="white" textAlign="center">摄像头未开启</Text>
              )}
            </Box>
          </AspectRatio>
          
          <HStack spacing={4}>
            <Button 
              colorScheme={cameraActive ? "red" : "blue"}
              onClick={handleToggleCamera}
            >
              {cameraActive ? "关闭摄像头" : "开启摄像头"}
            </Button>
            
            <Button 
              colorScheme="green" 
              isDisabled={!cameraActive}
              onClick={handleRecordClip}
            >
              录制片段
            </Button>
          </HStack>
          
          <Text mt={4} fontSize="sm">
            提示：实际功能将使用 WebRTC & MediaDevices API 调用本地摄像头
          </Text>
        </Box>
        
        {/* 右侧：已录制片段 */}
        <Box 
          flex={1}
          p={6} 
          bg={cardBg} 
          borderRadius="lg" 
          boxShadow="md"
        >
          <Heading size="md" mb={4}>已录制片段</Heading>
          
          {recordedClips.length > 0 ? (
            <VStack spacing={3} align="stretch">
              {recordedClips.map((clip, index) => (
                <Box 
                  key={index}
                  p={3}
                  bg={clipBg}
                  borderRadius="md"
                >
                  <Flex justify="space-between" align="center">
                    <Text>{clip}</Text>
                    <HStack>
                      <Button size="sm" colorScheme="blue">预览</Button>
                      <Button size="sm" colorScheme="red">删除</Button>
                    </HStack>
                  </Flex>
                </Box>
              ))}
            </VStack>
          ) : (
            <Text color="gray.500">暂无已录制片段</Text>
          )}
          
          <Box mt={6}>
            <Heading size="sm" mb={2}>远程推流</Heading>
            <Box p={4} borderWidth={1} borderRadius="md" borderStyle="dashed">
              <Text mb={2}>扫描二维码连接移动设备</Text>
              <Box bg="gray.300" h="150px" w="150px" mx="auto" borderRadius="md">
                <Text color="gray.600" textAlign="center" lineHeight="150px">二维码占位</Text>
              </Box>
              <Text mt={2} fontSize="sm" textAlign="center">
                使用手机扫码连接
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
      
      <Flex justify="space-between" mt={8}>
        <Button as={Link} to="/tasks/script" colorScheme="gray">
          上一步：脚本规划
        </Button>
        <Button as={Link} to="/tasks/editing" colorScheme="blue">
          下一步：视频剪辑
        </Button>
      </Flex>
    </Box>
  );
};

export default ShootingPage;