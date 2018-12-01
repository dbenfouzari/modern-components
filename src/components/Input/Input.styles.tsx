import darken from "polished/lib/color/darken";
import styled, { css } from "../../styled-components";

export const StyledInput = styled.input`
  border-radius: 4px;
  border: 0 solid;
  border-bottom-width: 1px;
  font-size: 14px;
  padding: 5px 10px;
  outline: none;
  background-color: #fff;
  color: ${(props) => props.theme.primaryColor};

  &:focus,
  &:active {
    border-bottom-width: 3px;
  }
`;
