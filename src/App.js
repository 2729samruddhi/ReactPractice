import './App.css';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import ColorExplorer from './Components/ColorExplorer/ColorExplorer';
import Parent from './Components/Parent';

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
  {
    path: "/parent",
    element: <Parent />
  }
]);

  return (
    <div className='mt-auto ml-[30%]'>
    <RouterProvider router={appRouter}/>
     </div>
  );
}
export default App;
