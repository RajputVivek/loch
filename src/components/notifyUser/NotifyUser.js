import { useState, useEffect } from "react";
import "./notifyUser.css";

const NotifyUser = ({ msg, type, timeout }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout]);

  const notificationStyle = {
    backgroundColor: notification[type][0],
    color: notification[type][1],
  };

  return (
    <>
      {isVisible && (
        <div
          className="notification-box"
          role="alert"
          style={notificationStyle}
        >
          {msg}
        </div>
      )}
    </>
  );
};

const notification = {
  error: ["#ecc8c5", "#ab3331"],
  success: ["#d4edda", "#155724"],
  info: ["#cce5ff", "#004085"],
};

export default NotifyUser;
