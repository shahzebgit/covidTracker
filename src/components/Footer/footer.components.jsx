import React from 'react';

import {Typography} from '@material-ui/core'

import './footer.css'


const Footer = () =>{
    return(
        <div className="footer-container">
            {/* <Typography variant="caption" display="block" align='center'>
              Data Source :<a href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">Covid19India</a>
                &nbsp;|&nbsp;<a href="https://covid19.mathdro.id/api/" target="_blank" rel="noopener noreferrer">Mathdro</a>
            </Typography> */}

            <footer>Data Source :<a href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">Covid19India</a>
                &nbsp;|&nbsp;<a href="https://covid19.mathdro.id/api/" target="_blank" rel="noopener noreferrer">Mathdro</a></footer>
        </div>
    )
}

export default Footer;