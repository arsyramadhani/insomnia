import { Flex, Text, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { supabase } from '../../../utils/supabaseClient';

const Gallery = ({ data, theme }) => {
    console.log(data);

    return (
        <Flex
            w='full'
            py='8'
            px='8'
            flexDir='column'
            alignItems='center'
            fontSize='sm'
            bgColor={theme.bg_light}>
            <Text
                // variants={item}
                fontSize='3xl'
                fontWeight='semibold'
                mb='8'
                fontFamily={theme.font_display}
                textColor={theme.text_dark}>
                Our Gallery
            </Text>
            <Grid w='full' templateColumns='repeat(2, 1fr)' gap={2}>
                {data.map((val, i) => {
                    return (
                        <GridItem
                            key={i}
                            colSpan={i === 0 ? '2' : '1'}
                            w='100%'
                            h='40'
                            bg='blue.500'
                            pos={'relative'}>
                            <Image
                                src={val.id}
                                layout='fill'
                                objectFit='cover'
                                loader={() => {
                                    return val.img;
                                }}
                            />
                        </GridItem>
                    );
                })}
            </Grid>
        </Flex>
    );
};

export default Gallery;
