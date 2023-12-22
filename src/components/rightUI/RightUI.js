import React, { useState, useEffect } from "react";
import "./rightUI.css";
import NotifyUser from "../notifyUser/NotifyUser";

const RightUI = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(undefined);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const isValid =
      /^((([!#$%&'*+\-\/=?^_`{|}~\w])|([!#$%&'*+\-\/=?^_`{|}~\w][!#$%&'*+\-\/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-\/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/gm.test(
        email
      );

    setIsValidEmail(isValid);
    
  };

  useEffect(() => {
    if (isValidEmail) {
      setTimeout(() => {
        window.location = "https://app.loch.one/welcome";
      }, 2000);
    } else {
      setTimeout(() => setIsValidEmail(undefined), 2000);
    }
  }, [isValidEmail]);

  return (
    <div id="right__ui">
      <div className="right__ui-container">
        <h3>Sign up for exclusive access.</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Your email address"
            id="email_input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Get Started</button>
        </form>
        {isValidEmail === undefined ? null : (
          <NotifyUser
            msg={
              isValidEmail
                ? "Thanks for providing your details."
                : "Please provide a valid Email address!"
            }
            type={isValidEmail ? "success" : "error"}
            timeout={3000}
          />
        )}
      </div>
    </div>
  );
};

export default RightUI;
