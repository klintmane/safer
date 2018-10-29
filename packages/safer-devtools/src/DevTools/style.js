import { css } from "emotion";

export const devtools = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 1rem;
  right: 1rem;
  z-index: 2147483647;
  pointer-events: none;

  > * {
    pointer-events: initial;
  }
`;
