import { BrowserRouter } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Page from './Pages/Page';
import { useState } from 'react';

function App() {
  const [theme,setTheme] = useState('light')
  return (
    <BrowserRouter>
      <div>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Page theme={theme} setTheme={setTheme}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
