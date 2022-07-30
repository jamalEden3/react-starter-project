import { device } from './breakpoints';
export const typo = `
    html, body {
        font-family: 'Hind', sans-serif;
    }

    h1 {
        font-size: 20px;
    }
    h2 {
        font-size: 20px;
    }
    h3 {
        font-size: 20px;
    }
    h4 {
        font-size: 20px;
    }
    h5 {
        font-size: 20px;
    }

    p {
        font-size: 20px; 
    }


    @media ${device.laptop} { 
        h1 {
            font-size: 20px;
        }
        h2 {
            font-size: 20px;
        }
        h3 {
            font-size: 20px;
        }
        h4 {
            font-size: 20px;
        }
        h5 {
            font-size: 20px;
        }
    
        p {
            font-size: 20px; 
        }    
    }

    @media ${device.laptop} { 
        h1 {
            font-size: 20px;
        }
        h2 {
            font-size: 20px;
        }
        h3 {
            font-size: 20px;
        }
        h4 {
            font-size: 20px;
        }
        h5 {
            font-size: 20px;
        }
    
        p {
            font-size: 20px; 
        }    
    }
`