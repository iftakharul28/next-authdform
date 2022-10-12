import React from 'react';
import { Layout } from '../layout';
import { useAuth } from '../context/AuthContext';

const dashboard = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <Layout title="Dashboard">
      <div className="user">
        <h1 className="user__value">E-mail : {user?.email}</h1>
      </div>
    </Layout>
  );
};

export default dashboard;
