import React, { useRef, useState, ChangeEvent, KeyboardEvent, FormEvent } from 'react';
import styles from '@/styles/login.module.scss';

const OtpForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState<string>('');
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d$/.test(value) && value !== '') return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && value) {
      inputRefs.current[index + 1]?.focus();
    }

    e.preventDefault();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    setError('');
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpString = otp.join('');
    
    if (otpString.length < 6) {
      setError('Invalid OTP. Please fill all the fields.');
      setOtp(Array(6).fill(''));
      return;
    }

    if (otpString !== '123456') {
      setError('Invalid OTP. Please enter the correct OTP.');
      setOtp(Array(6).fill(''));
      return;
    }

    // Redirect to /feed on successful OTP validation
    window.location.href='/feed'
  };

  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className={styles.otp_container}>
              <div className={styles.otp_box}>
                <h2 className={styles.otp_heading}>Verify Your OTP</h2>
                <p className={styles.otp_description}>Enter the 6-digit OTP sent to your email.</p>
                <form onSubmit={handleSubmit}>
                  <div className={styles.otp_inputs}>
                    {otp.map((value, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        className={styles.otp_input}
                        value={value}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                      />
                    ))}
                  </div>
                  <button type="submit" className="py-3 w-100 rounded-pill bg-secondary border-0 text-white">Verify OTP</button>
                  {error && <p className="text-danger mt-4 text-center" style={{fontSize:"12px"}}>{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
