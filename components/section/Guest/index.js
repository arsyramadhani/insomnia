import {
    Button,
    Divider,
    Flex,
    Text,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Stack
} from '@chakra-ui/react';
import React from 'react';

const Guest = ({ id, theme }) => {
    return (
        <Flex
            bgColor={theme.text_dark}
            id='guest'
            w='full'
            py='12'
            px='4'
            flexDir='column'
            alignItems='center'
            gap='4'
            textAlign='center'
            // fontSize='sm'
            textColor={theme.text_dark}>
            <Text textColor={theme.text_light}>Ucapkan sesuatu</Text>
            <Flex
                flexDirection='column'
                rounded='md'
                p='4'
                w='full'
                gap='2'
                shadow='xl'
                bgColor={theme.bg_light}>
                <Text>Konfirmasi kehadiran kamu, ya</Text>
                <Button colorScheme='teal' w='full'>
                    Ya, Saya datang
                </Button>
                <Flex gap='2'>
                    <Button flex='1' colorScheme='blackAlpha'>
                        Mungkin
                    </Button>
                    <Button flex='1' colorScheme='red'>
                        Tidak
                    </Button>
                </Flex>
                <Divider orientation='horizontal' />
                <FormControl w='full'>
                    <FormLabel textAlign='center' htmlFor='username'>
                        {'Kirim ucapan untuk mempelai'}
                    </FormLabel>
                    <Textarea id='username' type='text' />
                </FormControl>
                <Button colorScheme='teal' w='full'>
                    Submit
                </Button>
            </Flex>
            <Stack w='full'>
                {[1, 2, 3].map((val, i) => (
                    <Flex
                        w='full'
                        bg='gray.100'
                        p='4'
                        textColor={'gray.900'}
                        rounded='md'
                        textAlign='left'
                        flexDir='column'>
                        <Text>Konfirmasi kehadiran kamu, ya</Text>
                        <Text fontSize='xs'>Konfirmasi kehadiran kamu, ya</Text>
                        <Text>Konfirmasi kehadiran kamu, ya</Text>
                    </Flex>
                ))}
            </Stack>
        </Flex>
    );
};

export default Guest;
