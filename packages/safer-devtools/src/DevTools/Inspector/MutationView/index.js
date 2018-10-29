import React from "react";
import JSONTree from "react-json-tree";

import * as style from "./style";

const MutationView = props => {
  const { data, expand = () => false } = props;

  return (
    <div className={style.mutationView}>
      <JSONTree data={data} shouldExpandNode={expand} invertTheme={true} />
    </div>
  );
};

export default MutationView;
