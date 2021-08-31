import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  padding: 40px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Item = styled.div.attrs({ role: 'button' })`
  width: 80px;
  height: 80px;
  text-align: center;
  vertical-align: middle;
  line-height: 80px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  color: #fff;
  background-size: 300% 100%;
  background-image: linear-gradient(45deg, #3f86ed, #04befe, #25aae1);
  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
