import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import Shop from '../pages/Shop';

const AppRouter = () => {
  // const isAuth = true
  const { user } = useContext(Context);

  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />}/>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}/>
      ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
