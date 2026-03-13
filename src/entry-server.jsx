import { renderToString } from 'react-dom/server';
import AppServer from './AppServer.jsx';

export function render() {
  return renderToString(<AppServer />);
}
