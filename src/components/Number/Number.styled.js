import styled from "styled-components/macro";

export const NumberStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: calc(100% - 40px);
  max-width: calc(425px - 40px);
`;

export const NumberButton = styled.div`
  padding: 30px;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.color.neutral2};
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
