
import React from 'react';

import { Header } from './components/Header/Header.js';
import { Main } from './components/Main/Main.js';
import { Footer } from './components/Footer/Footer.js';

import { Register } from './components/Main/Others/Register.js';
import { Login } from './components/Main/Others/Login.js';
import { Create } from './components/Main/Others/Create.js';
import { Details } from './components/Main/Others/Details.js';
import { Edit } from './components/Main/Others/Edit.js';
import { Posts } from './components/Main/Others/Posts.js';
import { ContactUs } from './components/Main/Others/ContactUs.js';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:postId" element={<Details />} />
        <Route path="/edit/:postId" element={<Edit />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>

      <Footer />

    </React.Fragment>
  );
}

export default App;
