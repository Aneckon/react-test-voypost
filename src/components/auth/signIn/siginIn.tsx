import React, { FC, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import herroImage from '../../../image/Hero-image.png';
import logo from '../../../image/logo.svg';
import show from '../../../image/icon.svg';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './siginIn.css';

interface SiginInType {
  setUser: any;
  errorUser: string;
  setErrorUser: any;
}

export const SiginIn: FC<SiginInType> = ({ errorUser, setErrorUser, setUser }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          email: user.email,
          name: user.displayName,
          token: user.refreshToken,
        });
        const userDate = (user.displayName, user.refreshToken);
        localStorage.setItem('User', userDate);
        navigate('/');
      })
      .catch(() => setErrorUser('Invalid user!'));
  };

  return (
    <div className="siginIn">
      <img src={herroImage} alt="" />
      <div className="siginIn__form">
        <img src={logo} alt="" />
        <h1>Login</h1>
        <form action="#">
          <p className="error">{errorUser}</p>
          <TextField
            sx={{
              width: '100%',
              marginBottom: '50px',
            }}
            required
            label="Email"
            focused
            variant="filled"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            className="siginIn__form-show"
            style={{
              width: '100%',
            }}>
            <TextField
              sx={{
                width: '100%',
                marginBottom: '50px',
              }}
              required
              label="Password"
              variant="filled"
              type={showPassword ? 'text' : 'password'}
              focused
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              onClick={() => setShowPassword(!showPassword)}
              className="siginIn__form-show__image"
              src={show}
              alt=""
            />
          </div>

          <Button
            sx={{
              width: '100%',
              marginBottom: '50px',
              background: '#F50057',
              height: '42px',
            }}
            onClick={() => handleLogin(email, password)}
            variant="contained">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
