import styled from "styled-components/macro";

export const CreditCardStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.color.neutral7};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 100%;
`;

export const CardTop = styled.div`
  background-image: url(${({ bg_img }) => bg_img});
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(130px - 40px);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.neutral8};
  padding-inline: 10px;
  padding-block: 10px;
`;

export const CardName = styled.div`
  font-size: 12px;
`;

export const CardNumber = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-block: 5px 14px;
`;

export const CardCaption = styled.div`
  margin-block: 10px;
  color: ${({ theme }) => theme.color.neutral2};
  font-size: 10px;
`;

export const CardBalance = styled.div`
  margin-block: 10px;
  color: ${({ theme }) => theme.color.primary};
  font-size: 16px;
`;
