import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 220px);
  min-height: 600px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-top: 0px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
`;

export const TableContainer = styled.div`
  overflow-x: scroll;
  width: 100%;
  margin-top: 40px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const disabledMixin = css`
  background-image: none;
  background-color: gray;
  cursor: not-allowed;
`;

export const Hint = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Button = styled.div.attrs({ role: 'button' })`
  margin-top: 60px;
  width: 80px;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  color: #fff;
  background-size: 300% 100%;
  background-image: linear-gradient(45deg, #3f86ed, #04befe, #25aae1);
  cursor: pointer;
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  ${({ disabled }) => disabled && disabledMixin}
`;
