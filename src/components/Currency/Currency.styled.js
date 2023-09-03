import styled from "styled-components";

export const CurrencyStyle = styled.div`
  border: 1px solid ${({ theme }) => theme.color.neutral7};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 15px 24px;
`;

export const CurrencyData = styled.div`
  color: ${({ theme }) => theme.color.neutral5};
  margin-block: 10px;
  display: flex;
  justify-content: space-between;
  
`;

export const CurrencyHeader = styled.div`
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  
`;
