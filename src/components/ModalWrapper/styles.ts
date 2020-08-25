import styled, { css } from 'styled-components';

interface IProps {
  isShowing: boolean;
}

export const Container = styled.div<IProps>`
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  padding: 0 ${props => props.theme.paddings.normal};

  ${props =>
    props.isShowing
      ? css`
          opacity: 1;
          pointer-events: all;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `};

  z-index: 100;

  transition: all 200ms ease;
`;

export const Overlay = styled.div<IProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);

  ${props =>
    props.isShowing
      ? css`
          opacity: 1;
          pointer-events: all;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `};

  z-index: 10;

  transition: ${props => props.theme.transition};
`;
