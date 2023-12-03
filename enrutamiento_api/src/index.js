import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import App from './views/App';
import Character from './views/Character';
import SearchCharacter from './views/SearchCharacter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<App/>}/>
          <Route path='characters/:idCharacter' element={<Character/>}/>
          <Route path='' element={<SearchCharacter/>}/>
        </Route>
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


