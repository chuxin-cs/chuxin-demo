import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';

// tailwind css
import './chuxin/theme/index.css';

const root = createRoot(document.getElementById('root')! as HTMLElement);
root.render(
  <>
    <HelmetProvider>
      <Suspense>
        <App />
      </Suspense>
    </HelmetProvider>
  </>,
);
