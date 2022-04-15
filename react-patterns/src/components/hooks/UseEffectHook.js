import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

const UseEffectHook = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  //   console.log("rendering ......in function");
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  //   useEffect(() => {
  //     console.log("rendering ...... in useEffect");
  //     const onMouseMove = (e) => {
  //       console.log(e);
  //     };
  //     window.addEventListener("mousemove", () => onMouseMove);
  //     return () => {
  //       //   console.log("rendering unmount");
  //       window.removeEventListener("mousemove", () => onMouseMove);
  //     };
  //   }, []);
  return (
    <div>
      <div>{!data && loading ? "loading...." : data}</div>
      <div>{count}</div>
      <button onClick={(c) => setCount((c) => c + 1)}>increase count</button>
      <input
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
    </div>
  );
};

export default UseEffectHook;
