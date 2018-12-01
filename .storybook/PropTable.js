import * as React from "react";
import doctrine from 'doctrine';
import styled from "../lib/styled-components";

const StyledTable = styled.div`
  display: table;
  width: 100%;
`;

const StyledRow = styled.div`
  display: table-row;
`;

const StyledCell = styled.div`
  display: table-cell;
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
      <StyledRow>
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
            <StyledCell>{ propDef.required }</StyledCell>
            <StyledCell>{ propDef.defaultValue }</StyledCell>
            <StyledCell>{renderDefinition(propDef.description)}</StyledCell>
          </StyledRow>
        );
      })}
    </StyledTable>
  );
};

export default PropTable;
