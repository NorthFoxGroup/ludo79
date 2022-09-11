import React, { createContext, useContext, useRef, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [opt, setOpt] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const phone = useRef(null);
  const mainOtp = useRef(null);
  const name = useRef(null);
  const age = useRef(null);

  const submitOTP = () => {
    if (mainOtp.current.value === "0000") {
      console.log("Submit OTP");
    }
  };

  const sendOTP = () => {
    var a = phone.current.value;
    var b = age.current.value;
    if (a.length === 10) {
      setOpt(true);
    }
    if (a.length < 10) {
      setOpt(false);
      setError(true);
      setErrorMsg("Enter Valid Phone Number");
    }
    if (a.length > 10) {
      setOpt(false);
      setError(true);
      setErrorMsg("Enter Valid Phone Number");
    }
    if (b >= 100) {
      setOpt(false);
      setError(true);
      setErrorMsg("Enter Valid Age");
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        opt,
        setOpt,
        sendOTP,
        phone,
        mainOtp,
        submitOTP,
        name,
        age,
        error,
        setError,
        errorMsg,
        setErrorMsg,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
