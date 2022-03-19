import { render } from 'preact';
import App from './app';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  render(<App />, rootElement);
} else {
  // eslint-disable-next-line no-console
  console.error(
    'Could not render elements, because the root element was not found.',
  );
}
