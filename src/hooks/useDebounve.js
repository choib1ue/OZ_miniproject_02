import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler); // 타이머를 초기화하여 마지막 입력만 반영
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
