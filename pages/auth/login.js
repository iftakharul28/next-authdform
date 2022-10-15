import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { useInput, useValue } from '../../hook/useInput';
import { signIn } from 'next-auth/react';

const login = () => {
  const { login, resetPassword } = useAuth();
  const router = useRouter();
  const numberRef = useRef();
  const otpRef = useRef();
  const [forget, setForget] = useState(false);
  const [number, rstNumber, userNumber] = useValue('');
  const [otp, rstOtp, userOtp] = useValue('');
  const handleLogin = async (e) => {
    // validate your userinfo
    e.preventDefault();
    console.log(number, otp);

    const res = await signIn('credentials', {
      number: number,
      otp: otp,
      redirect: false,
    });
    console.log(res);
  };
  return (
    <form
      className="form"
      method="post"
      onSubmit={forget ? handleReset : handleLogin}
    >
      <h5 className="form__heading">LogIn Form</h5>
      <div className="form__group">
        <label htmlFor="number" className="form__label">
          Email address
        </label>
        <input
          type="number"
          name="number"
          id="number"
          className="form__input"
          placeholder="name@company.com"
          ref={numberRef}
          {...userNumber}
          required
        />
      </div>
      {!forget && (
        <div className="form__group">
          <label htmlFor="number" className="form__label">
            Password
          </label>
          <input
            type="number"
            name="otp"
            id="number"
            className="form__input"
            placeholder="••••••••"
            ref={otpRef}
            {...userOtp}
            required
          />
        </div>
      )}
      <button type="submit" className="form__button">
        {forget ? 'Submit' : 'Login'}
      </button>

      <div className="form__regester" onClick={() => setForget(!forget)}>
        <label htmlFor="checkbox" className="form__checkbox">
          checkbox
        </label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        forget Password ?
      </div>

      <div className="form__regester">
        Not registered?
        <span>Create account</span>
      </div>
    </form>
  );
};

export default login;
