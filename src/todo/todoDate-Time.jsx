import { useEffect } from "react";
import { useState } from "react";
// todo date and time functionality
export const DateTime = () => {
  const [dateTime, setDateTime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatttedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formatttedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};
