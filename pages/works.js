import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import makersCourses from "../public/images/works/makers.jpg";
import qleverpng from "../public/images/works/qlever.jpg";
import statsnetPng from "../public/images/works/statsnet.jpg";
import connecto from "../public/images/works/connecto.jpg";
import trusttrade from "../public/images/works/trustrade.jpg";

const Works = () => (
    <Layout title="Работы">
        <Container>
            <Heading as="h3" fontSize={20} fontFamily="sans-serif" mb={4}>
                Работы
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="makersCourses"
                        title="Makers Courses"
                        thumbnail={makersCourses}
                    >
                        Платформа для изучения программировния
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="qleverGame"
                        title="Qlever"
                        thumbnail={qleverpng}
                    >
                        Развлекательный портал
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="statsnetService"
                        thumbnail={statsnetPng}
                        title="Statsnet"
                    >
                        Сервис для поиска надежных контрагентов
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="connectoService"
                        thumbnail={connecto}
                        title="Connecto"
                    >
                        Проверка заемщиков и залога
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem
                        id="trusttrade"
                        thumbnail={trusttrade}
                        title="TrustTrade"
                    >
                        Платформа для трейдинга и инвестиции
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
