import { css } from "emotion";

export const inspector = ({ active }) => css`
  display: flex;

  font-family: "Helvetica", sans-serif;
  position: absolute;
  top: 50%;
  bottom: 3rem;
  right: 0;
  left: 50%;

  overflow: hidden;
  border-radius: 0.5rem;
  filter: drop-shadow(0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.2));
  background: white;

  transition: top 0.2s, left 0.2s, opacity 0.1s;

  ${active
    ? css`
        opacity: 1;
      `
    : css`
        opacity: 0;
        top: 100%;
        left: 100%;
      `};
`;
