import { Link } from "react-router-dom";
import styled from "styled-components";

export const FeatureStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid ${({ theme }) => theme.color.neutral7};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 12px 20px;
  justify-items: center;
  margin-block-end: 20px;
  user-select: none;
`;

export const FeatureItem = styled(Link)`
  height: 50px;
  width: 60px;
  text-align: center;
  color: ${({ theme }) => theme.color.neutral2};
`;
