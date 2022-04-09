import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue, Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Привет, Я Front-End разработчик из Кыргызстана!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading
            fontFamily="sans-serif"
            fontSize="30px"
          >
            {/*<Text*/}
            {/*  style={{fontSize: "30px"}}*/}
            {/*  fontFamily='sans-serif'*/}
            {/*>*/}
            Исхак Ишмахаметов
            {/*</Text>*/}
          </Heading>
          <p>Front-End разработчик</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/issak.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading
          as="span"
          fontFamily="sans-serif"
          fontSize="20px"
        >
          Обо мне
        </Heading>
        <BioSection>
          <BioYear>2019</BioYear>
          Заинтересовался программированием.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Начал активно углубляться в разработку для прокачки своих навыков с помощью фриланс проектов.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Работал в разлиных компаниях улучшая свои навыки в разработке
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Работаю в интересных для меня проектах
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading
          as="span"
          fontFamily="sans-serif"
          fontSize="20px"
        >
          Stack
        </Heading>
        <BioSection>
          <BioYear>Web</BioYear>
          ReactJS, NextJS, NodeJS, TypeScript, Webpack,
          Axios, Context, Redux, Mobx,
          JWT, REST API, Redux Thunk, Paddle
        </BioSection>
        <BioSection>
        <BioYear>Web</BioYear>
          Gulp, Nunjucks, NativeJS, D3JS
        </BioSection>
        <BioSection>
        <BioYear>Web</BioYear>
          Material UI, TailWind, Styled Components, Bootstrap, CSS Modules, SASS
        </BioSection>
        <BioSection>
        <BioYear>Web</BioYear>
          HTML, CSS
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading
          as="span"
          fontFamily="sans-serif"
          fontSize="20px"
        >
          Социальные сети
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/wkkkis" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @wkkkis
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/layryc" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @layryc
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
