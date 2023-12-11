import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "../src/views/App";
import Layout from "./Layout";
import { CardCharacter } from "./components/CardCharacter";
import App from "../src/views/App";
import SearchCharacters from "./views/SearchCharacters";
import RandomCharacter from "./views/RandomCharacter";
import Character from "./components/Character";
import GenreCharacter from './views/GenreCharacter';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="randomCharacter" element={<RandomCharacter/>}/>
          <Route path="characters/:nombreCharacter" element={<CardCharacter />} />
          <Route path="search" element={<SearchCharacters/>}/>
          <Route path="genre" element={<GenreCharacter/>}/>
          <Route path="characterInfo/:nombreCharacter" element={<Character/>}/>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
);
