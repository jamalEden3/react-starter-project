import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/tokens.style'

function Footer() {
  return (
    <FooterWrapper>
      Fooetr
    </FooterWrapper>
    
  )
}

const FooterWrapper = styled.p`
  color: ${colors.colorGray1} 
`

export default Footer