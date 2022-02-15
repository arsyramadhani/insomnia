import { ChakraProvider } from '@chakra-ui/react';
// import '../styles/globals.css';

export function reportWebVitals(metric) {
    // if (metric.name === 'FCP') {
    //     console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
    // }
    console.log(metric);
}

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
