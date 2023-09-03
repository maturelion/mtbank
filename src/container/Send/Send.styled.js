import styled from "styled-components";

export const SendStyle = styled.div`
  margin-inline: 20px;
  padding-block: 50px;
  height: calc(100vh - 110px);
`;

export const SendH2 = styled.h2`
  color: ${({ theme }) => theme.color.neutral2};
`;

export const SendParagraph = styled.p`
  color: ${({ theme }) => theme.color.neutral4};
`;

export const SendForm = styled.form`
  /* position: relative; */
  color: ${({ theme }) => theme.color.neutral4};
  margin-block: 50px;
`;

export const SendButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  /* margin-top: auto; */
  width: calc(100vw - 40px);
  max-width: calc(425px - 40px);
`;
