import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fefefe;
  padding: 1rem 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      Frankie Avina © {new Date().getFullYear()}
    </FooterWrapper>
  );
};

export default Footer;