import styled, { css } from "../../styled-components";
import { ToastProps } from "./Toast";

const MARGIN = "1em";

const getPosition = (position: ToastProps["position"]) => {
  switch (position) {
    case "bottom-right":
      return {
        bottom: MARGIN,
        right: MARGIN,
      };

    case "bottom":
      return {
        bottom: MARGIN,
        left: "50%",
        transform: "translateX(-50%)",
      };

    case "bottom-left":
      return {
        bottom: MARGIN,
        left: MARGIN,
      };

    case "top-left":
      return {
        top: MARGIN,
        left: MARGIN,
      };

    case "top":
      return {
        top: MARGIN,
        left: "50%",
        transform: "translateX(-50%)",
      };

    case "top-right":
    default:
      return {
        top: MARGIN,
        right: MARGIN,
      };
  }
};

export const ToastWrapper = styled.div<{ position?: ToastProps["position"] }>`
  background-color: #fff;
  border: 1px solid ${props => props.theme.clouds};
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.1);
  min-width: 200px;
  padding: 5px 10px;
  position: absolute;
  transition: box-shadow 0.3s ease;
  z-index: 9999;

  ${props =>
    css`
      ${getPosition(props.position)}
    `}

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(100, 100, 100, 0.1);
  }
`;
