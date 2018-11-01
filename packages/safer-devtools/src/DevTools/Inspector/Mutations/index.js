import React from "react";
import * as style from "./style";

const Mutations = props => {
  const { mutations = [], changes = [], active, onSelect = () => {} } = props;

  return (
    <ul className={style.mutations}>
      {mutations.map((m, i) => (
        <li key={i} onClick={() => onSelect(i)} data-active={active === i}>
          {changes[i].name}.{changes[i].key}: {JSON.stringify(changes[i].val)}
        </li>
      ))}
    </ul>
  );
};

export default Mutations;
