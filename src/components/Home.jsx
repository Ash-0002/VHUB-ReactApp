import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: "uppercase",
    p: "4",
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
       
       <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading textTransform={"uppercase"} py={"2"} w={"fit-content"} borderBottom={"2px solid"} m={"auto"}>
            Services
        </Heading>

        <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
            <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4", "16"]} textAlign={"center"}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis non unde alias similique 
                 consequuntur vero, odit, nam illo odio libero saepe, ut atque eaque perferendis. Facilis, reiciendis 
                illum nulla officia impedit libero sint soluta iure quaerat animi. Debitis, similique nam! Numquam nemo 
                porro voluptatibus est possimus nostrum repellat nam. Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Obcaecati neque architecto nemo reprehenderit debitis odio repellendus omnis. At ad, est dolor 
                liquid cupiditate rem placeat natus eos expedita ut laboriosam labore animi aperiam ratione? Omnis, 
                aliquam doloribus. Odio accusantium autem dolore voluptates, sint totam sunt placeat cupiditate veritatis 
                aliquam modi.
            </Text>
        </Stack>

       </Container>
    </Box>
  );
};

const MyCarousel = () => {
    return (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={"full"} h={"100vh"}>
        <Image src={img1} />
        <Heading bgColor={""} color={["white", "black"]} {...headingOptions} top={["50%", "20%"]} fontSize={["1.5rem", "4rem"]} w={"4xl"}>
            Eat. Sleep. Game. Repeat.
        </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
        <Image src={img2} />
        <Heading color={"white"} {...headingOptions} fontSize={["1.5rem", "3rem"]} w={"full"}>
            Games don't make you violent, lag does
        </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
        <Image src={img3} />
        <Heading color={"white"} {...headingOptions} fontSize={["1.5rem", "3rem"]} w={"full"}>          
            Home is where you are 'Player 1'
        </Heading>
    </Box>

    <Box w={"full"} h={"100vh"}>
        <Image src={img4} />
        <Heading color={"white"} {...headingOptions} fontSize={["1.5rem", "3rem"]} w={"full"}>
            “Life is an unknown game, and every day you play on a new field.”
        </Heading>
    </Box>
  </Carousel>
    )
};

export default Home;
