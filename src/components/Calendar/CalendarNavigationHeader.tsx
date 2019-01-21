import * as React from "react";
import styled from "../../styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex: 1;
`;

const Arrow = styled.div``;
const CurrentMonth = styled.div`
  flex: 1;
  text-align: center;
`;

const CalendarNavigationHeader = () => (
  <StyledHeader>
    <Arrow>{"<"}</Arrow>
    <CurrentMonth>Header</CurrentMonth>
    <Arrow>{">"}</Arrow>
  </StyledHeader>
);

export default CalendarNavigationHeader;
