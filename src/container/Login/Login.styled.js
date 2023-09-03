import styled from "styled-components";

export const LoginStyle = styled.div`
  margin-inline: 20px;
  padding-block: 50px;
`;

export const LoginH2 = styled.h2`
  color: ${({ theme }) => theme.color.neutral2};
`;

export const LoginParagraph = styled.p`
  color: ${({ theme }) => theme.color.neutral4};
`;

export const LoginForm = styled.form`
  color: ${({ theme }) => theme.color.neutral4};
  margin-block: 50px;
`;

export const LoginLink = styled.div`
  text-align: center;
`;
