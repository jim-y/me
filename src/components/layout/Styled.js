import styled from 'styled-components';

export const Logo = styled.div`
  height: 40px;
  display: flex;
  padding: 6px;
  align-items: center;
  font-size: 40px;
  letter-spacing: -4px;
  color: black;
  cursor: pointer;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

export const LinkWrap = styled.a`
  padding-right: 16px;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.gray['400']};
`;


