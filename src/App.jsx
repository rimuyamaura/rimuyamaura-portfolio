import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { SiteLayout, Home, About, Projects, Contact, Error } from './pages';
import { ErrorElement } from './components';
import { PreLoader } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      <PreLoader loading={loading} />
      {!loading && <RouterProvider router={router} />}
    </>
  );
};
export default App;
