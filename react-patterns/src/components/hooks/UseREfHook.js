import React, { useRef, useState } from "react";
import Hello from "./Hello";
import { useForm } from "./useForm";
export const UseRefHook = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });

  const inputRef = useRef();
  const [showHello, setShowHello] = useState(true);
  return (
    <div>
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        type="text"
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
    </div>
  );
};
