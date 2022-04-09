import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Makers Courses">
    <Container>
      <Title>
        Makers <Badge>2021</Badge>
      </Title>
      <P>
        Платформа для изучения программирования
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://makers.courses/">
          https://makers.courses/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, NativeJS, Python, Jest Testing</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/makers.jpg" alt="makersCourses" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
