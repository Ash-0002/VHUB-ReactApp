import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import {
  AiOutlineSend,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to get Updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading>VHUB</Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>

          <Box display={'flex'} alignItems={'center'} gap={'2'}>
            <AiFillGithub />
            <Button variant={'link'} colorScheme={'white'} >
              <a target={"blank"} href="https://github.com/Ash-0002">Github</a>
            </Button>
          </Box>

          <Box display={'flex'} alignItems={'center'} gap={'2'}>
            <AiFillLinkedin />
            <Button variant={'link'} colorScheme={'white'}>
              <a target={"blank"} href="https://www.linkedin.com/in/ashish-rajput-720b031a1/">
                Linkedin
              </a>
            </Button>
          </Box>

          <Box display={'flex'} alignItems={'center'} gap={'2'}>
            <AiFillInstagram />
            <Button variant={'link'} colorScheme={'white'}>
              <a target={"blank"} href="https://www.instagram.com/factsnotice/?hl=en">
                Instagram
              </a>
            </Button>
          </Box>

        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
