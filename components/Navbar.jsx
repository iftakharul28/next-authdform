import React, { useState } from 'react';
import { ActiveLink } from './';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <ActiveLink activeClassName="nav__link--active" href="/">
          <a className="nav__link">Home</a>
        </ActiveLink>
        <ActiveLink activeClassName="nav__link--active" href="/dashboard">
          <a className="nav__link">dashboard</a>
        </ActiveLink>
      </div>
      <div className="nav__avator-wrapper">
        <div
          className="nav__avator-image-wrapper"
          onClick={() => setToggle(!toggle)}
        >
          {user ? (
            <img
              className="nav__avator"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="avator"
            />
          ) : (
            <img className="nav__avator" src="/avator.png" alt="avator" />
          )}
        </div>
        {user && toggle ? (
          <div className="nav__user">
            <a className="nav__user-link">{user?.email}</a>
            <p className="nav__user-link" onClick={() => logout()}>
              logout
            </p>
          </div>
        ) : toggle ? (
          <div className="nav__user">
            <p className="nav__user-link">LogIn</p>
            <p className="nav__user-link">Register</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
