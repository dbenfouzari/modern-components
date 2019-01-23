import { mix } from "polished";
import styled from "../../styled-components";

export const CheckboxWrapper = styled.label``;
export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  left: -9999px;

  &:disabled + span:before {
    cursor: not-allowed;
    background-color: ${props => mix(0.6, "#eee", props.theme.greenSea)};
  }

  &:disabled + span:after {
    cursor: not-allowed;
  }

  & + span {
    position: relative;
    padding-left: 25px;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 2px;
      width: 17px;
      height: 17px;
      border: 1px solid ${props => props.theme.primaryLighter};
      border-radius: 3px;
    }

    &:after {
      content: "✔";
      position: absolute;
      top: -3px;
      left: 4px;
      font-size: 19px;
      color: ${props => props.theme.primaryLighter};
      transition: all 0.2s ease;
    }
  }

  &:not(:checked) + span:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + span:after {
    opacity: 1;
    transform: scale(1);
  }
`;
