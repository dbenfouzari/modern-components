import { IconProp, library, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import styled, { css } from "../../styled-components";

library.add(fab, fas);

interface IconProps {
  /**
   * The icon to use
   *
   * Can be : "iconName" or {['fab', 'iconName']}
   */
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

/**
 * @see https://github.com/FortAwesome/react-fontawesome
 */
const Icon = ({ name, size, fixedWidth }: IconProps) => {
  return <StyledIcon icon={name} {...{ size, fixedWidth }} />;
};

export default Icon;
