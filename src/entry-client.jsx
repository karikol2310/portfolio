import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import '@fontsource/fira-code/latin-400.css';
import App from './App.jsx';

const root = document.getElementById('root');

if (root.hasAttribute('data-ssr')) {
  root.removeAttribute('data-ssr');
  hydrateRoot(root, <StrictMode><App /></StrictMode>);
} else {
  createRoot(root).render(<StrictMode><App /></StrictMode>);
}
