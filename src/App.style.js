import styled from 'styled-components';
import Modal from 'react-modal';

export const Outer = styled.div`
  background-color: #fff;
`;

export const Inner = styled.div`
  padding: 100px;
  box-sizing: border-box;
  width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;

export const EnhancedModal = styled(Modal)`
  width: 500px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.h2`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;

export const Button = styled.div.attrs({ role: 'button' })`
  margin-top: 60px;
  width: 80px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
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
`;
