
import React from 'react';

import { Header } from './components/Header/Header.js';
import { Main } from './components/Main/Main.js';
import { Footer } from './components/Footer/Footer.js';

import { Register } from './components/Main/Others/Register/Register.js';
import { Login } from './components/Main/Others/Login/Login.js';
import { Create } from './components/Main/Others/Create/Create.js';
import { Details } from './components/Main/Others/Details/Details.js';
import { Edit } from './components/Main/Others/Edit/Edit.js';
import { Posts } from './components/Main/Others/Posts/Posts.js';
import { ContactUs } from './components/Main/Others/ContactUs/ContactUs.js';
import { MyProfile } from './components/Main/Others/MyProfile/MyProfile.js';

import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/Main/Others/NotFound/NotFound.js';

function App() {
  return (
    <React.Fragment>

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:postId" element={<Details />} />
        <Route path="/edit/:postId" element={<Edit />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />

    </React.Fragment>
  );
}

export default App;
