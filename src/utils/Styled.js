import styled from 'styled-components';

export const AlignCenter = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const StylelessLink = styled.a`
  color: inherit;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  cursor: pointer;
`;