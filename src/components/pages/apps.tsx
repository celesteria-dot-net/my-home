import { Application } from '@/applications';
import Container from '@/components/atoms/Container';
import ExLink from '@/components/atoms/ExLink';
import Heading2 from '@/components/atoms/headings';
import Header from '@/components/organisms/Header';
import { internalPaths } from '@/paths';

type Prop = {
  applications: Application[];
};

// TODO: responsive

const Apps = ({ applications = [] }: Prop) => (
  <>
    <Header />
    <Container>
      <Heading2>{internalPaths.apps.title}</Heading2>
      {applications.length ? (
        <ul className="menu">
          {applications.map((app) => (
            <li className="card shadow-md my-2">
              <ExLink href={app.link}>
                <div className="card-body">
                  <h3 className="card-title">{app.title}</h3>
                  <p>{app.description}</p>
                </div>
              </ExLink>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>There are no applications. Under development.</span>
          </div>
        </div>
      )}
    </Container>
  </>
);

export default Apps;
