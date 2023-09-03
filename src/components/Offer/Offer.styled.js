import styled from "styled-components";

export const OfferStyle = styled.div`
  height: 133px;
  margin-block-end: 35px;
  position: relative;
  background-color: #ded2ff;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const OferHeading = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.secondary};
`;

export const OferParagraph = styled.p`
  color: ${({ theme }) => theme.color.neutral5};
`;
