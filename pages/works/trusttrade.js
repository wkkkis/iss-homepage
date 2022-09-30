import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title="TrustTrade">
        <Container>
            <Title>
                TrustTrade <Badge>2022</Badge>
            </Title>
            <P>Платформа для трейдинга и инвестиции</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://trusttrade.pro/">
                        https://trusttrade.pro/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        React JS, Redux, Redux Thunk, REST API, Sass, Webpack,
                        D3
                    </span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/trustrade.jpg" alt="Trusttrade" />
        </Container>
    </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
