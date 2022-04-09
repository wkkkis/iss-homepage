import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Statsnet">
    <Container>
      <Title>
        Statsnet <Badge>2022</Badge>
      </Title>
      <P>
        Сервис для поиска надежных контрагентов
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://statsnet.co/">
            https://statsnet.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Context, Jenkins, Axios, Webpack</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/statsnet.jpg" alt="Statsnet" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
