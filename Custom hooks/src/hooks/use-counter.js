import React, { useEffect, useState } from "react";

export default function useCounter(diarection = true) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      if (diarection) {
        setCounter((prevCounter) => prevCounter + 1);

      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }

    }, 1000);

    return () => clearInterval(interval);

  }, [diarection]);

  return counter;
}
