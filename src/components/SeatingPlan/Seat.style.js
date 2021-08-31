import styled, { css } from 'styled-components';

const selectableMixin = css`
  border: 1px solid gray;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
`;

const disabledMixin = css`
  background-color: #e2373f;
  cursor: not-allowed;
`;

const selectedMixin = css`
  background-color: #0ba360;
  border: none;
  color: #fff;
`;

export default styled.div.attrs({ role: 'button' })`
  width: 50px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: #fff;
  ${({ selectable }) => (selectable ? selectableMixin : disabledMixin)}
  ${({ selected }) => selected && selectedMixin}
`;
