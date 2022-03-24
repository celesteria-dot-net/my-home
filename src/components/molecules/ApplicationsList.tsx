import { Application } from '@/applications';
import ExLink from '@/components/atoms/ExLink';

type Prop = {
  applications: Application[];
};

const ApplicationsList = ({ applications = [] }: Prop) =>
  applications.length ? (
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
        <span>現在公開中のアプリケーションはありません。開発中です。</span>
      </div>
    </div>
  );

export default ApplicationsList;
