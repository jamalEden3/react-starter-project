import { createGlobalStyle } from 'styled-components';
import { typo } from './typo.style';
import { reset } from './reset.style';

export const GlobalStyle =  createGlobalStyle `
    ${typo}
    ${reset}
`