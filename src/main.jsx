import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import Error from './components/ErrorPage';
import About from './components/About';
import Portfolio from './Portfolio';
import Contact from './components/Contact';
import Resume from './Resume';
import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
