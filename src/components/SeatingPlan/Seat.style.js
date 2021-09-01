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

const hideMixin = css`
  visibility: hidden;
`;

const smallSizeMixin = css`
  width: 30px;
  height: 30px;
  line-height: 30px;
`;

const largeSizeMixin = css`
  width: 50px;
  height: 50px;
  line-height: 50px;
`;

const getSizeMixin = ({ size }) => {
  switch (size) {
    case 'small':
      return smallSizeMixin;
    case 'large':
    default:
      return largeSizeMixin;
  }
};

export default styled.div.attrs({ role: 'button' })`
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: #fff;
  ${({ selectable }) => (selectable ? selectableMixin : disabledMixin)}
  ${({ selected }) => selected && selectedMixin}
  ${({ hide }) => hide && hideMixin}
  ${getSizeMixin}
`;
