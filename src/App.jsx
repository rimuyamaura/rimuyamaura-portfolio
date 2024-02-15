import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { SiteLayout, Landing, About, Projects, Contact, Error } from './pages';
import { ErrorElement } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/projects',
        element: <Projects />,
        errorElement: <ErrorElement />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
