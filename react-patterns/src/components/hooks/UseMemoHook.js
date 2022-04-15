import React, { useMemo, useState, useCallback } from "react";
import { useFetch } from "./useFetch";

// function computeLogestWord(arr) {
//   if (!arr) {
//     return [];
//   }
//   let longestWord = "";
//   arr.forEach((sentence) => {
//     sentence.split(" ").forEach((word) => {
//       if (word.length > longestWord) {
//         longestWord = word;
//       }
//     });
//   });
// }

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const computeLogestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    console.log("computing longest word");
    let longestWord = "";
    arr.forEach((sentence) => {
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord) {
          longestWord = word;
        }
      });
    });
  }, []);

  const longestWord = useMemo(
    () => computeLogestWord(data),
    [computeLogestWord, data]
  );
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseMemoHook;
