import { Center, VStack, Stack, Box, Button } from "@chakra-ui/react";
import Typed from "react-typed"
import { FaReact, FaLinkedin } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { MdOutlineSchool, MdOutlineEmojiEvents } from 'react-icons/md';
import { SiTypescript, SiCsharp, SiNodedotjs, SiSpotify } from 'react-icons/si';
import TimeLine from "../components/Timeline";
import { Link } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'

export default function Home() {

  return (
    <>
    <Center maxH={400} mt={2} maxW={500} p="2" justifyContent={"flex-start"}>
      <Button onClick={() => window.open('https://open.spotify.com/playlist/0p07oxSqrnPxegrztiYVJ8?si=aac635ed6f354e4e', "_blank")} 
       leftIcon={<SiSpotify color="#1db954" size={24}/>} variant='outline' colorScheme="whiteAlpha">
      <Box fontSize={"sm"} ml={2}>Playlist to help you make a creative resume </Box>
      </Button>
    </Center>
    <VStack spacing={4} align='stretch' mt={6}>
      <Center fontSize="3xl">
        <h1>Who am I ?</h1>
      </Center>
      <Center color={'purple.400'} fontSize="5xl">
        <h1>Samuel Galante</h1>
      </Center>
      <Center mx="auto" fontSize="4xl">
        {'<>'}
        <Typed
          strings={[
              "Developer ⚛️",
              "Entrepreneur 🚀",
              "Batman 🦇",
            ]}
            typeSpeed={40}
            backSpeed={80}
            loop />
        {'</>'}
      </Center>
      <Center fontSize="md" >
        <div style={{ color: '#9F7AEA'}}>
          {'<p>'}
        </div>
        <div style={{maxWidth: 1000}}>
          <p>My mission as a developer is to solve as many problems with the {`"magic"`} of programming as possible!</p>
        </div>
        <div style={{ color: '#9F7AEA'}}>
          {'</p>'}
        </div>
      </Center>
      </VStack>
      <Center color={'green.300'} fontSize="3xl" mt='12'>
        <h1>My techs</h1>
      </Center>

      <Center>
        <Stack direction={['column', 'row']} spacing='64px' mt='10'>

          <VStack spacing={4} align='stretch'>
            <Center fontSize="3xl">
              <IoLogoJavascript size={32} color="#F6E05E"/>
            </Center>
            <span>JAVASCRIPT</span>
          </VStack>

          <VStack spacing={4} align='stretch' mt={6}>
            <Center fontSize="3xl">
              <FaReact size={32} color="#61dbfb" />
            </Center>
            <span>REACT JS</span>
          </VStack>

          <VStack spacing={4} align='stretch' mt={6}>
            <Center fontSize="3xl">
              <SiTypescript size={32} color="#2d79c7"/>
            </Center>
            <span>TYPESCRIPT</span>
          </VStack>

          <VStack spacing={4} align='stretch' mt={6}>
            <Center fontSize="3xl">
              <SiNodedotjs size={32} color="#90c53f" />
            </Center>
            <span>NODE JS</span>
          </VStack>

          <VStack spacing={4} align='stretch' mt={6}>
            <Center fontSize="3xl">
              <SiCsharp size={32} color="#953dac"/>
            </Center>
            <span>C#</span>
          </VStack>
        </Stack>
      </Center>

      <Center color={'green.300'} fontSize="3xl" mt='12'>
        <h1>Experiences</h1>
      </Center>

      <TimeLine />

      <Center color={'purple.400'} fontSize="3xl" mt='12'>
        <h1 style={{marginRight: 4}}>Education </h1>
        <MdOutlineSchool />
      </Center>
      
      <SimpleGrid columns={2} spacing={10} p={8}>
        <Box border={"1px"} borderColor="purple.600" minH='100px' p={4}>
          <h2>PUC MINAS - Software Engineering</h2>
          <Text color='gray.500'>
            Start in January 2018
          </Text>
        </Box>
        <Box border={"1px"} borderColor="purple.600" minH='100px' p={4}>
          <h2>ESCOLA DE FORMAÇÃO GERENCIAL - Technical high school in Administration</h2>
          <Text color='gray.500'>
            January 2015 - December 2017
          </Text>
        </Box>
      </SimpleGrid>


      <Center color={'green.300'} fontSize="3xl" mt='12'>
        <h1 style={{marginRight: 4}}>More Education</h1>
        <MdOutlineEmojiEvents />
      </Center>

      <SimpleGrid columns={2} spacing={10} p={8}>
        <Box border={"1px"} borderColor="green.300" minH='100px' p={4}>
          <h2>ROCKETSEAT - Bootcamp React, React Native, NodeJs</h2>
        </Box>
        <Box border={"1px"} borderColor="green.300" minH='100px' p={4}>
          <h2>ACHIEVE - Language school</h2>
          <Text color='gray.500'>
          Intermediate/Advanced English (reading, writing and speaking)
          </Text>
        </Box>
        <Box border={"1px"} borderColor="green.300" minH='100px' p={4}>
          <h2>RAJA VENTURES - Pre-acceleration program</h2>
          <Text color='gray.500'>
          After creating Cuide-se, we participated in this pre-acceleration to give traction to our business
          </Text>
        </Box>
        <Box border={"1px"} borderColor="green.300" minH='100px' p={4}>
          <h2>EVENT ORGANIZER - Startup Weekend - 2017</h2>
          <Text color='gray.500'>
          After participating in the event as a competitor, I decided to do the
            event in my hometown (Teófilo Otoni/Brazil) to bring
            groundbreaking experience I had.
          </Text>
        </Box>
        <Box border={"1px"} borderColor="green.300" minH='100px' p={4}>
          <h2>STARTUP WEEKEND - Participation in 2016 and 2017</h2>
          <Text color='gray.500'>
          Startup Weekend is a hands-on entrepreneurship event
          where innovation ideas are fostered during an end-of-year
          week.
          </Text>
        </Box>
      </SimpleGrid>

      <Center  mt='12' mb='2'>
        <Link href='https://github.com/SamuelGalante/Curriculum' isExternal>To access this repository and use it as a template, click here 🤗</Link>
      </Center>
      <Center mb='12'>
      <Button leftIcon={<FaLinkedin size={24}/>}  variant='link' onClick={() => window.open('https://www.linkedin.com/in/samuel-galante-474b2415b/', "_blank")}></Button>
      +55 (31) 9 9359-9576 🇧🇷
      <span style={{marginLeft: 15}}>+1 437-240-3949 🇨🇦</span>
      </Center>
    </>
  )
}
