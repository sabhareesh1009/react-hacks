import React, { useState } from "react";
import { useForm } from "./useForm";

function expensiveInitiate() {
  return 10;
}

const UseStateHook = () => {
  //    const [count, setCount] = useState(() => expensiveInitiate());
  //   const [count, setCount] = useState(0);

  //   const [{ count }, setCount] = useState({ count: 10, count2: 20 });

  //   const [count1, setCount1] = useState(10);
  //   const [count2, setCount2] = useState(10);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [values, handleChange] = useForm({ email: "", password: "" });

  console.log("I am rendering");
  return (
    <>
      {/* <button onClick={() => setCount((currentState) => currentState + 1)}>
        +
      </button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button
        onClick={() =>
          setCount((currentState) => ({
            ...currentState,
            count: currentState.count + 1,
          }))
        }
      >
        +
      </button> */}
      {/* <button onClick={() => setCount1(count1 + 2)}>++</button>
      <button onClick={() => setCount2(count2 - 1)}>--</button>
      <div>{count1}</div>
      <div>{count2}</div> */}

      {/* <div>
        <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div> */}

      <div>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default UseStateHook;
