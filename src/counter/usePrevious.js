import { useEffect, useRef } from "react";

export default function usePrevious(count) {
  const ref = useRef();
  useEffect(() => {
    ref.current = count;
  }, [count]);
  return ref.current;
}
