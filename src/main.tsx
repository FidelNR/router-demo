import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/profile.tsx'
import Mario from './components/Mario.tsx'
import Luigi from './components/Luigi.tsx'
import DefaultProfile from './components/DefaultProfile.tsx'
import ErrorPage from './components/ErrorPage.tsx'
import routes from './routes.tsx'

const router = createBrowserRouter(routes);
 /* {
    path:"/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "profile/:name",
    element: <Profile/>,
    children:[
      {
        index: true,
        element: <DefaultProfile/>,
      },
      {
        path:"Mario",
        element:<Mario/>,
      },
      {
        path:"Luigi",
        element:<Luigi/>,
      },

  ]
  },
]);*/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,

 /* <React.StrictMode>
    <App />
</React.StrictMode>*/
)
