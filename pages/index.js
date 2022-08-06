import NextLink from "next/link";
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
    useColorModeValue,
    Text,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { IoLogoInstagram, IoLogoGithub } from "react-icons/io5";

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            >
                Привет, Я Front-End разработчик из Кыргызстана!
            </Box>

            <Box display={{ md: "flex" }}>
                <Box flexGrow={1} mb={{ md: 6 }}>
                    <Heading fontFamily="sans-serif" fontSize="30px">
                        Исхак Ишмахаметов
                    </Heading>
                    <p>
                        Frontend разработчик с 3 годами опыта во фронтенд
                        разработке. Основной стек Javascript, Typescript,
                        Next.js, React.js. Стремлюсь и дальше развиваться в этом
                        направлении, хочу работать с современными frontend.
                    </p>
                    <a href="/cv/cv.pdf" target="_blank">
                        <Button mt={3}>ПОСМОТРЕТЬ РЕЗЮМЕ</Button>
                    </a>
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
                        src="/images/issak2.jpg"
                        alt="Profile image"
                    />
                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="span" fontFamily="sans-serif" fontSize="20px">
                    Обо мне
                </Heading>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Заинтересовался программированием. Начал активно углубляться
                    в разработку для прокачки своих навыков с помощью фриланс
                    проектов.
                </BioSection>
                <BioSection>
                    <BioYear>2020 - 2021</BioYear>
                    Работал в разлиных компаниях улучшая свои навыки в
                    разработке
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Работаю в интересных для меня проектах
                </BioSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="span" fontFamily="sans-serif" fontSize="20px">
                    Компании
                </Heading>
                <BioSection>
                    <BioYear>Июнь 2022 — Август 2022 (3 месяца)</BioYear>
                    FortyLines
                </BioSection>
                <BioSection>
                    <BioYear>
                        Октябрь 2021 — По настоящее время (11 месяцев)
                    </BioYear>
                    Statsnet
                </BioSection>
                <BioSection>
                    <BioYear>Апрель 2022 — Август 2022 (5 месяца)</BioYear>
                    Oracle Digital
                </BioSection>
                <BioSection>
                    <BioYear>Июнь 2021 — Декабрь 2021 (7 месяцев)</BioYear>
                    Makers
                </BioSection>
                <BioSection>
                    <BioYear>Январь 2021 — Июнь 2021 (6 месяцев)</BioYear>
                    Ditate.me
                </BioSection>
                <BioSection>
                    <BioYear>Сентябрь 2020 — Декабрь 2020 (4 месяца)</BioYear>
                    Irokez
                </BioSection>
                <BioSection>
                    <BioYear>Август 2020 — Октябрь 2020 (3 месяца)</BioYear>
                    Sunrise Studio
                </BioSection>
                <BioSection>
                    <BioYear>
                        Январь 2019 — Апрель 2020 (1 год и 4 месяца)
                    </BioYear>
                    Фриланс
                </BioSection>
            </Section>

            <Section delay={0.2}>
                <Heading as="span" fontFamily="sans-serif" fontSize="20px">
                    Stack
                </Heading>
                <BioSection>
                    <BioYear>-</BioYear>
                    HTML5, CSS3 (Sass/Scss/Less);
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Javascript (ES6+);
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Typescript;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Next.js;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Unit testing, Jest;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Webpack, Estimate, Gulp;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Optimize, SEO, PageSpeed, LightHause;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Nunjucks, Thymeleaf;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Git, GitHub, GitLab, BitBucket;
                </BioSection>
                <BioSection>
                    <BioYear>-</BioYear>
                    Node.js, Express;
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="span" fontFamily="sans-serif" fontSize="20px">
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
                        <Link
                            href="https://instagram.com/layryc"
                            target="_blank"
                        >
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
);

export default Home;
export { getServerSideProps } from "../components/chakra";
