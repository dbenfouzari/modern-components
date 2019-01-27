import styled, { css } from "../../styled-components";
import { ToastContainerProps } from "./ToastContainer";

const MARGIN = "1em";

const getPosition = (position: ToastContainerProps["position"]) => {
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
        left: MARGIN,
        top: MARGIN,
      };

    case "top":
      return {
        left: "50%",
        top: MARGIN,
        transform: "translateX(-50%)",
      };

    case "top-right":
    default:
      return {
        right: MARGIN,
        top: MARGIN,
      };
  }
};

export const ToastWrapper = styled.div`
  background-color: #fff;
  border: 1px solid ${props => props.theme.clouds};
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.1);
  min-width: 200px;
  padding: 5px 10px;
  position: relative;
  transition: box-shadow 0.3s ease;
  z-index: 9999;

  &:hover {
    box-shadow: 0 1px 8px 2px rgba(100, 100, 100, 0.1);
  }
`;

export const ToastContainerStyled = styled.div<{
  position?: ToastContainerProps["position"];
}>`
  position: fixed;
  z-index: 999;
  
  ${props =>
    css`
      ${getPosition(props.position)}
    `}

  ${ToastWrapper} + ${ToastWrapper} {
    margin-top: 10px;
  }
`;
