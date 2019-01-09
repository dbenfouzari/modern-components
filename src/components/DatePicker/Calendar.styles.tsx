import styled from "../../styled-components";

export const Cell = styled.div`
  flex: 1;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;

  ${Cell} {
    font-weight: bold;
  }
`;

export const Week = styled.div`
  flex: 1;
  display: flex;
`;

export const Wrapper = styled.div`
  box-shadow: 1px 3px 3px 0px rgba(100, 100, 100, 0.2);
  border: 1px solid rgba(100, 100, 100, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 500px;
  max-width: 500px;
  padding: 15px;
`;

export const CalendarContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
