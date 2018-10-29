import React from "react";

import * as style from "./style";
import Toggle from "./Toggle";
import Inspector from "./Inspector";

class DevTools extends React.PureComponent {
  state = { shown: false };

  toggleShown = () => this.setState({ shown: !this.state.shown });

  render() {
    const { shown } = this.state;

    return (
      <div className={style.devtools}>
        <Inspector active={shown} />
        <Toggle active={shown} onToggle={this.toggleShown} />
      </div>
    );
  }
}

export default DevTools;
