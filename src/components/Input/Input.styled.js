import styled from "styled-components";

export const InputLabel = styled.label`
  margin: 20px 0;
  position: relative;
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.color.neutral7};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding-block: 10px;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  cursor: text;
`;

export const InputStyle = styled.input`
  padding: 10px;
  width: -webkit-fill-available;
  border: none;
  outline: none;

  &:focus + span,
  &:not(:placeholder-shown) + span {
    transform: scale(0.75) translateY(-60%) translateX(-60px);
  }

  /* For IE Browsers*/
  &:focus + span,
  &:not(:-ms-input-placeholder) + span {
    transform: scale(0.75) translateY(-60%) translateX(-60px);
  }
`;

export const FloatingLabel = styled.span`
  padding: 10px;
  width: -webkit-fill-available;
  pointer-events: none;
  position: absolute;
  left: 0;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  color: ${({ theme }) => theme.color.neutral5};
`;
