import React, { useState } from "react";
import axios from "axios";
import { useSearchParams } from 'next/navigation'

const Otp = () => {
  const searchParams = useSearchParams()
  const phoneNumber = searchParams.get('phoneNumber')

  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");

    try {
      const response = await axios.post("http://213.199.59.243:8080/verify-otp", {
        phoneNumber,
        otp: otpValue,
      });

      if (response.data.success) {
        // OTP verification successful, navigate to the next page
        console.log("OTP verification successful");
        router.push("/login");
      } else {
        // OTP verification failed, display an error message
        console.error("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <div className="flex items-center justify-center py-11 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Enter OTP</h1>
        <p className="text-gray-600 mb-6">
          We've sent a one-time password to your registered mobile number.
        </p>
        <form className="space-y-4" onSubmit={handleOtpSubmit}>
          <div className="flex justify-center space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-2xl font-bold bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
// http://localhost:3000/otp?phoneNumber=9843401357