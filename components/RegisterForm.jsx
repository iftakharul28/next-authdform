import React, { useRef, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useInput, useValue } from '../hook/useInput';
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const { signup } = useAuth();
  const router = useRouter();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [name, resetName, userName] = useInput('name', '');
  const [email, resetEmail, userEmail] = useInput('email', '');
  const [password, resetPassword, userPassword] = useValue('');
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      await signup(email, name, password);
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="form" method="post" onSubmit={handleSignup}>
      <h5 className="form__heading">Register Form</h5>
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          className="form__input"
          placeholder="Jone Due"
          required
          ref={nameRef}
          {...userName}
        />
      </div>
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
          required
          ref={emailRef}
          {...userEmail}
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
          required
          ref={passwordRef}
          {...userPassword}
        />
      </div>
      <button type="submit" className="form__button">
        Login
      </button>
      <div className="form__regester">
        Alrady registered?
        <span>Login account</span>
      </div>
    </form>
  );
};

export default RegisterForm;
