import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import routes from './routes.js';
import Main from './pages/main';

function App() {
  const elements = routes.map((item, index) => (
    <Route key={index} path={item.path} element={item.element} />
  ));
  return (
    <>
    <Router>
        <Routes>
            <Route path="/">
              {elements}
            </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
