import './App.css';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ColorExplorer from './Components/ColorExplorer/ColorExplorer';

function App() {
   const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/colorExplorer",
    element: <ColorExplorer />,
  },
]);

  return (
    <div className='mt-auto ml-[30%]'>
    <RouterProvider router={appRouter}/>
     </div>
  );
}
export default App;
