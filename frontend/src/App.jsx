import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { DatePicker } from 'antd';
import Dashboard from './components/Dashboard';
import './App.css';
import Home from './views/Home';
import Profile from './views/Profile';
import Logout from './views/Logout';
import NotFound from './views/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Dashboard>
          <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </>
  );
};

export default App;