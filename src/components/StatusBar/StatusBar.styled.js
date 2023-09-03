import styled from "styled-components";

export const StatusBarStyle = styled.div`
  background-color: ${({ theme }) => theme.color.neutral7};
  height: 8px;
  position: sticky;
  top: 48px;
`;

export const StatusBarProgress = styled.div`
  width: ${({ width }) => width}%;
  height: inherit;
  background-color: ${({ theme }) => theme.color.primary};
  animation: progress 1500ms ease-in 1;

  @keyframes progress {
    from {
      width: 0;
    }
  }
`;
