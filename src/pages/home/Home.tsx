
import { Grid, Paper } from '@material-ui/core';
import { Box, Button, Typography } from '@mui/material';

import React from 'react';
import './Home.css';

export default function Home(){
    return(
        <>
           
           <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Aqui você verá os assuntos mais relevantes no mundo da tecnologia, assim como dicas e os meus relatos da vida de um Dev para te motivar e te dar um norte nessa vida de Desenvolvedor</Typography>
                       
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
  
           
           
           
           
           
           
            
   
    );
}