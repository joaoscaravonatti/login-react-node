import React from 'react';
import { Typography } from '@material-ui/core';
// import { Container } from './styles';

const ErrorMessage = (props) => (
    <Typography align="center" variant='h6' color="error" gutterBottom>
        {props.message}
    </Typography>
); 

export default ErrorMessage;