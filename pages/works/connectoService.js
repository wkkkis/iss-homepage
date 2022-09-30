import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="Connecto">
        <Container>
            <Title>
                Connecto <Badge>2022</Badge>
            </Title>
            <P>Проверка заемщиков и залога</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://connecto.kz/">
                        https://connecto.kz/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        React JS, Worker, Proxy, Module CSS, React Hooks
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/connecto.jpg" alt="Connecto" />
        </Container>
    </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
