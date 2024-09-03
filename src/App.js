import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './config/route-config';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  );
}

export default App;
