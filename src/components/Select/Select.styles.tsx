import chroma from "chroma-js";
import * as React from "react";
import styled, { css } from "../../styled-components";
import { ThemeInterface } from "../../theme";

export const SelectWrapper = styled.div`
  position: relative;
`;

const getLightenColor = (props: { theme: ThemeInterface }) =>
  chroma(props.theme.primaryLighter)
    .alpha(0.4)
    .hex();

export const InputWrapper = styled(
  ({ isOpen, ...rest }: { isOpen: boolean }) => <div {...rest} />,
)`
  border-radius: 4px;
  border: 1px solid ${props => props.theme.primaryLighter};
  display: flex;
  padding: 5px;

  ${props =>
    props.isOpen
      ? css`
          border-bottom: none;
          border-radius: 4px 4px 0 0;
        `
      : null}
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  outline: none;
`;

export const Tag = styled.span<{ isHighlighted: boolean }>`
  background-color: ${getLightenColor};
  border-radius: 2px;
  border: 1px solid ${props => props.theme.primaryLighter};
  cursor: default;
  font-size: 0.8em;
  padding: 2px 15px 2px 2px;
  position: relative;

  ${props =>
    props.isHighlighted
      ? css`
          background-color: ${props.theme.primaryLighter};
        `
      : null}

  & > span {
    cursor: default;
    position: absolute;
    right: 4px;
  }

  & + ${Input} {
    margin-left: 5px;
  }

  & + & {
    margin-left: 5px;
  }
`;

export const OptionsWrapper = styled.ul`
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  border: 1px solid ${props => props.theme.primaryLighter};
  border-top: none;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: calc(100% - 1px);
  width: 100%;
`;

export const Option = styled.li<{ isFocused?: boolean }>`
  cursor: default;
  padding: 10px;

  ${props =>
    props.isFocused
      ? css`
          background-color: ${getLightenColor};
        `
      : null}

  ${props =>
    props.onMouseDown
      ? css`
          &:hover {
            background-color: ${getLightenColor};
          }
        `
      : null}
`;
