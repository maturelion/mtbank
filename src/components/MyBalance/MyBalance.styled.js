import styled from "styled-components";

export const MyBalanceStyle = styled.div`
    margin-block: 20px;
`;

export const MyBalanceText = styled.div`
  color: ${({ theme }) => theme.color.neutral5};
`;

export const BalanceEyeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Balance = styled.div`
  color: ${({ theme }) => theme.color.neutral2};
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  height: 40px;
`;
