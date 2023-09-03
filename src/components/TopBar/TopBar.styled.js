import styled from "styled-components/macro";

export const TopBarContainer = styled.div`
  width: calc(100% - 32px);
  max-width: calc(425px - 32px);
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 16px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  -webkit-tap-highlight-color: transparent;
  z-index: 2;
  font-weight: bold;
  color: ${({ theme }) => theme.color.neutral2};
`;
