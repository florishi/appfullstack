import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import {FaLinkedin,FaGithub} from 'react-icons/fa';
import { BsGlobe2 } from "react-icons/bs";

  const Logo = (props) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="40"
        version="1"
        color='red'
        viewBox="0 0 498 160"
      >
        <path
          d="M880 1158c16-29 114-200 217-380 142-249 190-325 199-315 12 14 424 734 424 742 0 3-196 5-435 5H850l30-52zM2745 1103c-65-18-95-67-95-153 0-109 45-160 141-160 53 0 63 4 95 33 71 65 66 213-9 262-26 16-101 27-132 18zm116-90c17-44 11-118-12-147-25-32-75-35-110-7-34 27-40 125-10 163 12 15 31 28 44 30 36 6 78-13 88-39zM3400 1092c-51-25-83-91-77-158 10-103 53-144 150-144 90 0 137 53 137 155 0 78-23 123-74 146-52 23-91 24-136 1zm131-71c17-21 20-36 17-85-5-69-29-96-83-96-47 0-75 38-75 101 0 69 13 97 52 107 43 11 64 5 89-27zM2370 1075c0-23 4-25 45-25h45V790h60v260h45c41 0 45 2 45 25v25h-240v-25zM3000 945V790h78c140 1 192 44 192 160 0 62-21 105-63 130-25 16-50 20-119 20h-88V945zm164 94c33-15 50-60 43-111-7-54-34-79-91-85-46-6-48-4-48 32 0 8 0 51 1 95l1 80h35c19 0 45-5 59-11zM3849 1073c-6-16-31-85-54-155l-44-128h34c30 0 33 3 39 35l7 35h127l12-35c10-29 16-35 41-35 16 0 29 4 29 9s-22 73-50 152c-27 79-50 145-50 146 0 2-18 3-40 3-35 0-42-4-51-27zm67-85c9-29 19-59 22-65 3-9-8-13-37-13-24 0-41 5-41 12 0 12 32 118 36 118 1 0 10-24 20-52zM4090 945V790h60v120h54c77 0 111 29 111 95 0 39-5 51-28 71-25 21-38 24-113 24h-84V945zm133 106c30-12 42-43 27-71-8-15-21-20-55-20h-45v43c0 24 3 47 7 50 9 10 37 9 66-2zM4380 945V790h60v120h53c31 0 61 6 75 15 44 32 45 121 1 158-16 13-40 17-105 17h-84V945zm135 105c23-9 26-15 23-47-3-38-3-38-50-41l-48-3v50c0 47 2 51 24 51 14 0 37-4 51-10zM794 958c-45-72-424-742-421-745 2-2 198-2 434-1l431 3-213 373C908 793 810 964 807 966c-3 3-9-1-13-8zM1547 593l-215-378 430-3c237-1 433-1 435 1 3 4-412 736-426 750-5 5-105-162-224-370zM3090 456c0-37 4-65 9-62 8 5 4 116-5 125-2 2-4-26-4-63zM3260 457c0-38 4-67 10-67 16 0 16 107-1 125-5 5-9-17-9-58zM4420 491c0-24-3-28-24-24-31 6-52-27-36-57 7-14 20-19 45-18l35 1v64c0 35-4 63-10 63-5 0-10-13-10-29zm0-61c0-20-17-30-37-22-16 5-17 24-2 39 16 16 39 5 39-17zM2463 455c-15-30-23-58-19-62s12 0 17 10c6 9 21 17 34 17s28-8 34-17c5-10 12-15 15-12 7 6-40 119-49 119-3 0-17-25-32-55zm47-12c0-7-7-13-15-13-16 0-19 9-9 35 5 13 8 14 15 3 5-7 9-19 9-25zM3130 500c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10zM2572 458c-25-25-6-68 30-68 10 0 18 4 18 9s-8 8-17 7c-12 0-19 7-21 22-3 17 2 22 17 22 12 0 21 5 21 10 0 14-33 13-48-2zM2652 458c-25-25-6-68 30-68 10 0 18 4 18 9s-8 8-17 7c-12 0-19 7-21 22-3 17 2 22 17 22 12 0 21 5 21 10 0 14-33 13-48-2zM2730 450c-15-28 4-60 35-60s50 32 35 60c-6 12-21 20-35 20s-29-8-35-20zm49-36c-14-14-17-14-29 0-10 13-10 19 0 32 12 14 15 14 29 0 14-15 14-17 0-32zM2829 461c-4-33-2-71 4-71 4 0 7 11 7 24 0 25 22 51 33 39 4-3 7-19 7-35 0-15 5-28 10-28 6 0 10 13 10 29 0 39 28 50 36 13 10-47 12-48 13-5l1 41-60-1c-33 0-60-3-61-6zM2980 408c0-32 4-58 10-58s10 11 10 24c0 19 4 22 24 19 30-6 48 22 35 54-6 18-15 22-44 21l-35-1v-59zm65 32c9-15-14-40-31-33-22 8-18 43 5 43 11 0 23-5 26-10zM3130 430c0-22 5-40 10-40 6 0 10 18 10 40s-4 40-10 40c-5 0-10-18-10-40zM3184 455c-4-9 4-24 17-36l24-21-22 5c-13 3-23 1-23-4s11-9 24-9c31 0 41 27 16 42-25 16-25 25-2 31 12 4 11 5-6 6-12 0-25-6-28-14zM3306 441c8-17 13-35 9-41-3-5-1-10 5-10 19 0 8 74-12 78-16 3-16 1-2-27zM3400 430c0-47 17-54 22-8 4 46 28 49 28 4 0-20 5-36 10-36 6 0 10 11 10 24 0 25 22 51 33 39 4-3 7-19 7-35 0-15 5-28 10-28 12 0 13 50 2 66-4 6-33 11-64 12l-58 1v-39zM3560 455c-15-18-10-45 13-59 34-22 73 27 47 59-16 19-44 19-60 0zm45-25c0-13-6-25-12-27-16-6-27 21-19 43 9 23 31 11 31-16zM3650 429c0-22 5-39 10-39 6 0 10 12 10 26 0 15 8 32 17 39 15 11 14 13-10 13-25 0-27-4-27-39zM3722 458c-15-15-15-41 0-56 14-14 62-16 53-2-3 5-12 7-19 4-8-3-17-1-21 5-4 7 4 11 20 11 22 0 26 4 23 23-3 25-36 35-56 15zm48-14c0-2-9-4-21-4-11 0-18 4-14 10 5 8 35 3 35-6zM3902 458c-27-27-6-68 35-68 13 0 23 4 23 9s-8 7-19 4c-10-3-22 0-25 6-5 7 2 11 17 11 31 0 38 9 26 31-11 22-39 25-57 7zm43-8c3-5-3-10-15-10s-18 5-15 10c3 6 10 10 15 10s12-4 15-10zM3980 465c0-13 31-65 38-65 5 0 16 16 25 35s13 35 8 35c-6 0-13-9-16-20s-10-20-15-20-12 9-15 20c-6 18-25 29-25 15zM4082 458c-27-27-6-68 35-68 13 0 23 4 23 9s-8 7-19 4c-10-3-22 0-25 6-5 7 2 11 18 11 30 0 42 16 26 35-15 18-42 19-58 3zm43-8c3-6-4-10-17-10-18 0-20 2-8 10 19 12 18 12 25 0zM4170 428c0-43 14-53 17-12 1 23 17 43 33 44 12 0 31-71 25-90-3-11-2-20 3-20s19 25 31 56c24 64 24 64 12 64-5 0-14-12-19-27l-10-28-11 28c-9 24-16 27-46 25-33-2-35-4-35-40zM4472 458c-31-31-5-67 46-66 30 1 32 3 32 38s-2 37-33 38c-19 1-39-4-45-10zm46-44c-19-19-38-11-38 16 0 24 21 31 40 14 12-12 12-16-2-30zM4575 433c9-21 13-48 10-60-11-45 13-22 34 33 24 63 24 64 13 64-5 0-13-12-19-27l-10-28-11 28c-6 15-16 27-22 27s-4-15 5-37zM3807 383c-5-26-4-26 9-8 16 22 18 35 5 35-5 0-11-12-14-27zM4660 400c0-5 5-10 10-10 6 0 10 5 10 10 0 6-4 10-10 10-5 0-10-4-10-10z"
          transform="matrix(.1 0 0 -.1 0 160)"
        ></path>
      </svg>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export const Footer = () =>  {
    
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
            <Box width={{ base: "36%", sm: "36%", md: "16%", lg: "16%", xl: "16%",'2xl': '16%'}} >
            <img style={{width:"100%"}} src="https://i.imgur.com/MUpQoOE.png" alt="" srcset="" />
            </Box>
          {/* <Logo /> */}
          <Text fontFamily={"Roboto Mono"} fontWeight="500" >© App created by Adil Ahmed ✌️</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Portfolio'}  >
            <a href="https://www.adilahmed.in/" target="_blank" rel="noopener noreferrer">
              <BsGlobe2 />
            </a>
            </SocialButton>
            <SocialButton label={'LinkedIn'} >
            <a href="https://www.linkedin.com/in/adil-ahmed-522a0b21a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            </SocialButton>
            <SocialButton label={'Github'} >
            <a href="https://github.com/AdilAhmed976" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }