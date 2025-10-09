import './App.css';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ColorExplorer from './Components/ColorExplorer/ColorExplorer';

function App() {
   const appRouter = createBrowserRouter([
        {
          path:"/",
          element:<Home/>,
          children :[
            {
              path:"colorExplorer",
              element:<ColorExplorer/>
            }
          ]
      }
      ])
  return (
    <RouterProvider router={appRouter}/>
  );
}
export default App;
