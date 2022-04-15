import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loadings: false });
  const isCurrent = useRef(true);
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);
  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((x) => x.text())
      .then((res) => {
        setTimeout(() => {
          if (isCurrent.current) {
            setState({
              data: res,
              loading: false,
            });
          }
        }, 2000);
      });
  }, [url]);
  return state;
};
