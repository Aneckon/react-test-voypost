import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Main, SiginIn } from './components';

export const App = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [errorUser, setErrorUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem('User')) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={<SiginIn errorUser={errorUser} setErrorUser={setErrorUser} setUser={setUser} />}
        />
        <Route path="/" element={<Main user={user} />} />
      </Routes>
    </div>
  );
};
