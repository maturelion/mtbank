import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

export const FooterContainer = styled.footer`
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding-inline: 16px;
  padding-block: 15px;
  width: calc(100% - 40px);
  max-width: calc(425px - 40px);
  bottom: 0;
  left: 0;
  right: 0;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.color.neutral8};
  z-index: 2;
`;
export const FooterItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.neutral6};
  stroke: ${({ theme }) => theme.color.neutral6};
  -webkit-tap-highlight-color: transparent;

  &.active {
    color: ${({ theme }) => theme.color.primary};
    stroke: ${({ theme }) => theme.color.primary};
  }
`;
