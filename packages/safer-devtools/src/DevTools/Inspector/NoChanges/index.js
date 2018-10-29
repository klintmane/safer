import React from "react";

import * as style from "./style";

const NoChanges = props => {
  return (
    <div className={style.noChanges}>
      <h2>No Changes</h2>
      Waiting for a store to update...
    </div>
  );
};

export default NoChanges;
