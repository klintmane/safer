import React from "react";
import * as style from "./style";

const Toggle = ({ active, onToggle }) => {
  return (
    <label className={style.toggle}>
      <input type="checkbox" checked={active} onChange={onToggle} />
      <span className={style.slider} />
    </label>
  );
};

export default Toggle;
