import React from 'react';
import { Header } from './componets/Header';
import SearchUser from './componets/SearchUser';
import NameSurname from './componets/NameSurname';
import { Post } from './componets/Post';
import { AddComent } from './componets/AddComent';


import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SearchUser />
      <NameSurname />
      <Post />
      <AddComent />
    </div>
  );
}

export default App;
