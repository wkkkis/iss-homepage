import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Qlever">
    <Container>
      <Title>
        Qlever <Badge>2020</Badge>
      </Title>
      <P>
        Развлекательный портал
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://play.google.com/store/apps/details?id=com.irokez.qlever&hl=ru&gl=US">
          https://play.google.com/store/apps/details?id=com.irokez.qlever&hl=ru&gl=US <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Gulp, NativeJS, Bootstrap</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/qlever.jpg" alt="Qlever" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
