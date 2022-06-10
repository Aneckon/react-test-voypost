import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './header.css';

interface HeaderType {
  user: any;
}

export const Header: FC<HeaderType> = ({ user }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogoute = () => {
    navigate('/login');
    localStorage.removeItem('User');
  };

  return (
    <div className="header">
      <div className="header__menu">
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="white" />
        </svg>
        Voypost
      </div>
      <div className="header__ava">
        <div className="header__ava-text" onClick={() => setOpen(!open)}>
          U
        </div>
        <div className={open ? 'header__ava-dropdown block' : 'header__ava-dropdown'}>
          <p onClick={handleLogoute}>Logout</p>
        </div>
      </div>
    </div>
  );
};
