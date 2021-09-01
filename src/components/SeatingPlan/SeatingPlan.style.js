import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: -webkit-fill-available;
  height: 600px;
  padding: 40px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
`;

const disabledMixin = css`
  background-image: none;
  background-color: gray;
  cursor: not-allowed;
`;

export const Button = styled.div.attrs({ role: 'button' })`
  margin-top: 100px;
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
