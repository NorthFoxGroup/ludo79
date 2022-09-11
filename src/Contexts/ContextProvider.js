import React, { createContext, useContext, useRef, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [opt, setOpt] = useState(false);
  const [alert, setAlert] = useState(false);
  const phone = useRef(null);
  const mainOtp = useRef(null);

  const submitOTP = () => {
    if (mainOtp.current.value === "0000") {
      console.log("Submit OTP")
    }
  };

  const sendOTP = () => {
    var a = phone.current.value;
    if (a.length === 10) {
      setOpt(true);
    } else {
      setOpt(false);
      setAlert(true);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        opt,
        setOpt,
        alert,
        setAlert,
        sendOTP,
        phone,
        mainOtp,
        submitOTP,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
