import styled from "styled-components";

export const SuccessStyle = styled.div`
  margin-inline: 20px;
  padding-block: 50px;
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SuccessButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  /* margin-top: auto; */
  width: calc(100vw - 40px);
  max-width: calc(425px - 40px);
`;
