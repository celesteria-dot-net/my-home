import { Application } from '@/applications';
import Container from '@/components/atoms/Container';
import ExLink from '@/components/atoms/ExLink';
import Heading2 from '@/components/atoms/headings';
import Header from '@/components/organisms/Header';
import ApplicationsList from '@/containers/organisms/ApplicationsList';
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
