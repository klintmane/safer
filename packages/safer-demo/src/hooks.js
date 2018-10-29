import React from "react";
import { useStores } from "safer";

const HooksDemo = () => {
  const [counter = {}, text = {}] = useStores("counter", "text");

  return (
    <div>
      Count is: {counter.count}
      Text is: {text.value}
    </div>
  );
};

export default HooksDemo;
