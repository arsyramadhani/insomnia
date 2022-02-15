import { Box, Center } from '@chakra-ui/react';
import React from 'react';

const ErrorPage = ({ message }) => {
    return (
        <Center w='100vw' h='100vh'>
            {message}
        </Center>
    );
};

export default ErrorPage;
