import styled from "styled-components";

export const RegisterStyle = styled.div`
  margin-inline: 20px;
  padding-block: 50px;
  height: calc(100vh - 110px);
`;

export const RegisterH2 = styled.h2`
  color: ${({ theme }) => theme.color.neutral2};
`;

export const RegisterParagraph = styled.p`
  color: ${({ theme }) => theme.color.neutral4};
`;

export const RegisterForm = styled.form`
  color: ${({ theme }) => theme.color.neutral4};
  margin-block: 50px;
`;

export const RegisterLink = styled.div`
  text-align: center;
`;

export const RegisterButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100vw - 40px);
  max-width: calc(425px - 40px);
`;
