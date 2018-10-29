import { css } from "emotion";

export const toggle = css`
  position: absolute;
  bottom: 0;
  right: 0;
  display: inline-block;
  width: 50px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const slider = css`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 43, 54);
  transition: 0.4s;
  border-radius: 1rem;

  &:before {
    position: absolute;
    content: "";
    width: 50%;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: orange;

    :before {
      transform: translateX(60%);
    }
  }
`;
