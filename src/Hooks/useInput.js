import { useState } from "react";

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  return { value, onChange, setValue, error, setError };
};
