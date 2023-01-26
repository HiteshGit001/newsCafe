import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Home from './pages/Home';
import { route } from './Routes/routes';
import "./styles.scss";
import "./global.scss";
import MobileDrawer from './component/Drawer/MobileDrawer';

function App() {
  return (
    <ChakraProvider>
      <MobileDrawer />
      <div className="page_container">
        <BrowserRouter>
          <NavBar />
          <Routes>
            {
              route.map((route: any) => {
                return (
                  <Route key={route.id} path={route.path} element={<route.element />} />
                )
              })
            }
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
