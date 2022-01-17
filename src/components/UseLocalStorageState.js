import { useState, useEffect } from "react";

function UseLocalStorageState(key, defaultVal) {
  // create a piece of state, base on value in the LocalStorage

  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  console.log(`:::::`, state);

  // use useEffect to update LocalStorage when the state changes
  return [state, setState];
}

export default UseLocalStorageState;
