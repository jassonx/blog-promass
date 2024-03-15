import { styled } from "styled-components";

export const GridAvatarName = styled.div`
  height: calc(100vh);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  background-color: #fafcff;

  grid-template-areas:
    "avatar title title "
    "avatar subtitle subtitle";
`;
