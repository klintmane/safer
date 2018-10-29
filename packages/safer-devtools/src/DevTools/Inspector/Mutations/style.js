import { css } from "emotion";

export const mutations = css`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  background: #eee;
  color: rgb(0, 43, 54);

  max-width: 50%;

  > li {
    padding: 1rem;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    overflow-x: hidden;
    text-overflow: ellipsis;

    &:hover {
      background: #e5e5e5;
    }

    &[data-active="true"] {
      color: orange;
      background: rgb(0, 43, 54);
    }
  }
`;
