import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import RootLayout from './pages/Root'
import Error from './pages/Error'
import ProductDetail from './pages/ProductDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      // {
      //   path: '/',
      //   element: <Home />
      // },
      {
        index: true,
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />
      }
    ]
  },

])


function App() {
  return (
    <RouterProvider router={router}>
      <div>App</div>
    </RouterProvider>
  )
}

export default App
