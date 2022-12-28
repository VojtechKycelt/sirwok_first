import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomepagePage from './pages/HomepagePage/HomepagePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomepagePage />,
    },
    {
        path: '/contact',
        element: <ContactPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

//TODO CREATE APP TEMPLATE REPO FOR FURTHER USE

function App() {
    return <RouterProvider router={router} />;
}

export default App;
