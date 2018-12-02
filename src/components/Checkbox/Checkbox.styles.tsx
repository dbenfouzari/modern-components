import { mix } from "polished";
import styled from "../../styled-components";

export const CheckboxWrapper = styled.span``;
export const StyledCheckbox = styled.input`
  position: absolute;
  left: -9999px;

  &:disabled + label:before {
    cursor: not-allowed;
    background-color: ${props => mix(0.6, "#eee", props.theme.greenSea)};
  }

  &:disabled + label:after {
    cursor: not-allowed;
  }

  & + label {
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
      border: 1px solid ${props => props.theme.peterRiver};
      border-radius: 3px;
    }

    &:after {
      content: "✔";
      position: absolute;
      top: 0;
      left: 4px;
      font-size: 19px;
      color: ${props => props.theme.peterRiver};
      transition: all 0.2s ease;
    }
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;
