import { useState } from "react";

export default defaultValue => {
  const [checked, setChecked] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { checked }
    } = e;
    setChecked(checked);
  };
  return { checked, onChange, setChecked };
};
