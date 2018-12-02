import { lighten } from "polished";
import * as React from "react";
import styled, { css } from "../../styled-components";

export const SelectWrapper = styled.div`
  position: relative;
`;

export const InputWrapper = styled(({ isOpen, ...rest }: { isOpen: boolean }) => <div {...rest} />)`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  display: flex;
  padding: 5px;

  ${(props) => props.isOpen ? css`
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  ` : null}
`;

export const Tag = styled.span`
  background-color: ${(props) => lighten(0.3, props.theme.primaryColor)};
  border-radius: 2px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  font-size: 0.8em;
  padding: 2px 15px 2px 2px;
  position: relative;

  & > span {
    cursor: default;
    position: absolute;
    right: 4px;
  }

  & + & {
    margin-left: 5px;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  outline: none;
`;

export const OptionsWrapper = styled.ul`
  background-color: #fff;
  border-radius: 0 0 4px 4px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-top: none;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: calc(100% - 1px);
  width: 100%;
`;

export const Option = styled.li<{isFocused?: boolean}>`
  cursor: default;
  padding: 10px;

  ${(props) => props.isFocused ? css`
    background-color: ${lighten(0.2, props.theme.primaryColor)};
  ` : null}

  ${(props) => props.onMouseDown ? css`
    &:hover {
      background-color: ${lighten(0.2, props.theme.primaryColor)};
    }
  ` : null}
`;
