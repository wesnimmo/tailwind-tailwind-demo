import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './components/themeContext';
import Toggle from './components/themeToggle';
import Background from './components/background';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
     <Background>
        <main>
          <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
            <Toggle />
          </div>
          <App />
        </main>
     </Background>
    </ThemeProvider>
   
  </React.StrictMode>
);


