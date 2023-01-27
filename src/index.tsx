import './styles/index.css';

import App from './components/App';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
