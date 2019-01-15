import { IconProp, library, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled, { css } from "../../styled-components";

library.add(fas);

interface IconProps {
  name: IconProp;
  size?: SizeProp;
  fixedWidth?: boolean;
}

const StyledIcon = styled(FontAwesomeIcon)`
  ${props =>
    props.fixedWidth
      ? css`
          width: 1em !important;
        `
      : null}
`;

const Icon = ({ name, size, fixedWidth }: IconProps) => {
  return <StyledIcon icon={name} {...{ size, fixedWidth }} />;
};

export default Icon;
