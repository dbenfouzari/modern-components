import * as React from "react";
import doctrine from 'doctrine';
import styled, { css } from "../lib/styled-components";

const StyledTable = styled.div`
  display: table;
  width: 100%;
`;

const StyledRow = styled.div`
  display: table-row;
  box-shadow: 0 1px 2px 0 rgba(100, 100, 100, 0.3);

  ${props => props.header ? css`
    font-weight: bold;
    
    ${StyledCell} {
      padding: 15px 10px;
    }
  ` : null}
`;

const StyledCell = styled.div`
  display: table-cell;
  padding: 10px;
`;

const StyledTag = styled.span`
  color: #2a64c1;
`;

/**
 * @see https://github.com/eslint/doctrine
 */
const parseJsdoc = input => doctrine.parse(input);

const renderDefinition = (propDef) => {
  const { description, tags } = parseJsdoc(propDef);

  return (
    <div>
      { tags.map(tag => (
        <span key={tag.title}>
          <StyledTag>@{ tag.title }</StyledTag>{' '}
          { tag.description }
          <br />
        </span>
      )) }
      { description }
    </div>
  );
}

const PropTable = (props) => {
  // console.log({ props });
  return (
    <StyledTable>
      <StyledRow header>
        <StyledCell>property</StyledCell>
        <StyledCell>propType</StyledCell>
        <StyledCell>required</StyledCell>
        <StyledCell>default</StyledCell>
        <StyledCell>description</StyledCell>
      </StyledRow>

      {props.propDefinitions.map((propDef, propDefIndex) => {
        // console.log({ propDef })
        return (
          <StyledRow key={propDefIndex}>
            <StyledCell>{ propDef.property }</StyledCell>
            <StyledCell>{ propDef.propType.name }</StyledCell>
            <StyledCell>{ propDef.required ? 'true' : 'false' }</StyledCell>
            <StyledCell>{ propDef.defaultValue }</StyledCell>
            <StyledCell>{renderDefinition(propDef.description)}</StyledCell>
          </StyledRow>
        );
      })}
    </StyledTable>
  );
};

export default PropTable;
