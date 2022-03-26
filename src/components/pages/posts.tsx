import Container from '@/components/atoms/Container';
import Heading2 from '@/components/atoms/headings';
import Header from '@/components/organisms/Header';
import PostList from '@/containers/molecules/PostList';
import { internalPaths } from '@/paths';

const Posts = () => (
  <>
    <Header />
    <Container>
      <Heading2>{internalPaths.posts.title}</Heading2>
      <PostList />
    </Container>
  </>
);

export default Posts;
