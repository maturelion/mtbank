import styled from "styled-components";

export const PinStyle = styled.div`
  width: 250px;
  margin-top: 40px;
  margin-inline: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PinInputBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const PinInputBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid
    ${({ theme, isFilled }) =>
      isFilled ? theme.color.primary : theme.color.neutral7};
  caret-color: ${({ theme }) => theme.color.neutral5};
  color: ${(props) => props.theme.color.primary};

  &:focus {
    outline: none;
  }
`;
