import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Container, HStack, VStack } from '@chakra-ui/layout';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input required type={'file'} css={{"&::file-selector-button": {
                border: "none",
                width: "calc(100% + 36px)", 
                height: "100%",
                marginLeft: "-18px",
                color: "black",
                backgroundColor: "white",
                cursor: "pointer",
            }}} />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>

      </VStack>
    </Container>
  );
};

export default Upload;
