import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import { useInput, useValue } from '../hook/useInput';

const LoginForm = () => {
  const { login } = useAuth();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [email, resetEmail, userEmail] = useInput('email', '');
  const [password, resetPassword, userPassword] = useValue('');
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="form__content" method="post" onSubmit={handleLogin}>
      <h5 className="form__content-heading">LogIn Form</h5>
      <div className="form__group">
        <label htmlFor="email" className="form__label">
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input"
          placeholder="name@company.com"
          ref={emailRef}
          {...userEmail}
          required
        />
      </div>
      <div className="form__group">
        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="form__input"
          placeholder="••••••••"
          ref={passwordRef}
          {...userPassword}
          required
        />
      </div>
      <button type="submit" className="form__button">
        Login
      </button>
      <div className="form__regester">
        Not registered?
        <span>Create account</span>
      </div>
    </form>
  );
};

export default LoginForm;
