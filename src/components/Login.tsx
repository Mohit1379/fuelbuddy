"use client"
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/styles/login.module.scss';
import OtpForm from '@/components/OtpForm';

function Login() {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [numberFocused, setNumberFocused] = useState(false);
  const [isHidePass, setIsHidePass] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    number: ''
  });
  const [numberError, setNumberError] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false); // New state for number validity

  // Refs for email, password, and number input elements
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);

  // Handlers for email input
  const handleEmailFocus = () => setEmailFocused(true);
  const handleEmailBlur = () => setEmailFocused(emailRef.current?.value !== '');

  // Handlers for password input
  const handlePasswordFocus = () => setPasswordFocused(true);
  const handlePasswordBlur = () => setPasswordFocused(passwordRef.current?.value !== '');

  // Handlers for number input
  const handleNumberFocus = () => setNumberFocused(true);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData({ ...formData, number: numericValue });
    setNumberError(false);
    setIsNumberValid(numericValue.length === 10); // Update validity state
  };

  const handleNumberBlur = () => {
    const value = numberRef.current?.value || '';
    setNumberFocused(value !== '');
    if (value.length < 10) {
      setNumberError(true);
      setIsNumberValid(false); // Set validity to false if less than 10 digits
    } else {
      setNumberError(false);
      setIsNumberValid(true); // Set validity to true if 10 digits
    }
  };

  const handleHideToggle = () => {
    setIsHidePass(!isHidePass);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === "fuelbuddy@gmail.com" && password === "admin") {
      window.location.href = "/feed";
      setFormData({
        email: '',
        password: '',
        number: ''
      });
    } else {
      alert("Wrong email or password");
    }
  };

  const handleNumberSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.number.length !== 10) {
      setNumberError(true);
    } 
  };

  useEffect(() => {
    alert("Email=fuelbuddy@gmail.com, Password=admin, OTP=123456");
  }, []);

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
      <div className={styles.card_layout}>
        <h1>Sign in</h1>
        <p className='text-dark' style={{ fontSize: "14px" }}>Stay updated on your professional world.</p>
        <form className={styles.login_form} onSubmit={handleFormSubmit}>
          <div className={styles.form_input_floating}>
            <label
              className={`${styles.form_label_floating} text-light ${emailFocused || (emailRef.current && emailRef.current.value) ? styles.transform : ''}`}
              htmlFor="input_email"
            >
              Email
            </label>
            <input
              id="input_email"
              type='email'
              onChange={handleInputChange}
              value={formData.email}
              name='email'
              ref={emailRef}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              required
            />
          </div>
          <div className={styles.form_input_floating}>
            <label
              className={`${styles.form_label_floating} text-light ${passwordFocused || (passwordRef.current && passwordRef.current.value) ? styles.transform : ''}`}
              htmlFor="input_password"
            >
              Password
            </label>
            <input
              id="input_password"
              name='password'
              onChange={handleInputChange}
              value={formData.password}
              type={isHidePass ? "text" : "password"}
              ref={passwordRef}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              style={{ padding: "26px 60px 3px 12px" }}
              required
            />
            <span className='text-secondary fw-bold position-absolute' style={{ cursor: "pointer" }} onClick={handleHideToggle}>
              {isHidePass ? "Hide" : "Show"}
            </span>
          </div>
          <div className='d-flex flex-column'>
            <p className='text-secondary fw-bold' onClick={() => alert("Email=fuelbuddy@gmail.com, Password=admin")} style={{ cursor: "pointer" }}>Forgot password?</p>
            <button type='submit' className='py-3 rounded-pill bg-secondary border-0 text-white'>Sign in</button>
            <p className='text-center pt-3 m-0'>or</p>
          </div>
        </form>
        <form className={styles.login_form} onSubmit={handleNumberSubmit}>
          <div className={styles.form_input_floating}>
            <label
              className={`${styles.form_label_floating} text-light ${numberFocused || (numberRef.current && numberRef.current.value) ? styles.transform : ''}`}
              htmlFor="input_number"
            >
              Enter Number
            </label>
            <input
              id="input_number"
              type="text"
              name="number"
              value={formData.number}
              ref={numberRef}
              onFocus={handleNumberFocus}
              onBlur={handleNumberBlur}
              onChange={handleNumberChange}
              maxLength={10}
              required
            />
            {numberError && <p className='text-danger mt-1' style={{ fontSize: "12px" }}>Invalid Number</p>}
          </div>
          <div className='d-flex flex-column py-2'>
            <button 
              type='submit' 
              data-bs-toggle="modal" 
              data-bs-target="#staticBackdrop" 
              className='py-3 rounded-pill border-0 text-white'
              disabled={!isNumberValid} // Disable button based on number validity
            >
              Send One Time Password
            </button>
          </div>
        </form>
        <OtpForm />
      </div>
    </div>
  );
}

export default Login;
