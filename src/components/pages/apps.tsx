import Container from '@/components/atoms/Container';
import Heading2 from '@/components/atoms/headings';
import Header from '@/components/organisms/Header';
import ApplicationsList from '@/containers/molecules/ApplicationsList';
import { internalPaths } from '@/paths';

// TODO: responsive

const Apps = () => (
  <>
    <Header />
    <Container>
      <Heading2>{internalPaths.apps.title}</Heading2>
      <ApplicationsList />
    </Container>
  </>
);

export default Apps;
