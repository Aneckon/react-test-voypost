import React, { FC } from 'react';

import { Header } from '..';

import './main.css';

interface MainType {
  user: any;
}

export const Main: FC<MainType> = ({ user }) => {
  return (
    <div className="main">
      <Header user={user} />
    </div>
  );
};
