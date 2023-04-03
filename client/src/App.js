//REACT
import React, { useState } from 'react';
//REACT COMPONENTS

import { Header } from './components/Header/Header.js';
import { Main } from './components/Main/Main.js';
import { Footer } from './components/Footer/Footer.js';

import { Register } from './components/Main/Others/Register/Register.js';
import { Login } from './components/Main/Others/Login/Login.js';
import { Logout } from './components/Main/Others/Logout/Logout.js';

import { Create } from './components/Main/Others/Create/Create.js';
import { Details } from './components/Main/Others/Details/Details.js';
import { Edit } from './components/Main/Others/Edit/Edit.js';
import { Posts } from './components/Main/Others/Posts/Posts.js';
import { ContactUs } from './components/Main/Others/ContactUs/ContactUs.js';
import { MyProfile } from './components/Main/Others/MyProfile/MyProfile.js';

import { NotFound } from './components/Main/Others/NotFound/NotFound.js';
//REACT HOOKS
//REACT CONTEXT
import { AuthContext } from './contexts/authContext.js';
//REACT ROUTER
import { Routes, Route } from 'react-router-dom';
import { RouteGuard } from './components/RouteGuard/RouteGuard.js';
//SERVICES

function App() {

  const [auth, setAuth] = useState({});

  const loginUser = (authData) => {
    setAuth(authData);
  };

  return (
    <AuthContext.Provider value={{ auth, loginUser }}>

      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:postId" element={<Details />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<RouteGuard />}>
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:postId" element={<Edit />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />

    </AuthContext.Provider>

  );
}

export default App;
