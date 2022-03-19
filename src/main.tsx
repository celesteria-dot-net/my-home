import { render } from 'preact';
import App from './app';
import './index.css';

const element = document.getElementById('app');

if (element) {
  render(<App />, element);
}
