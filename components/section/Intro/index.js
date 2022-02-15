import { Box, Flex, Img, Text } from '@chakra-ui/react';
import {
    motion,
    useAnimation,
    useTransform,
    useViewportScroll
} from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { container, item } from '../../../utils/animation';
import dateConvert from '../../../utils/dateConvert';
import { MBox, MText } from '../../motion';

const Intro = ({ data, theme }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -100]);
    const y2 = useTransform(scrollY, [0, 300], [0, -125]);
    const y3 = useTransform(scrollY, [0, 300], [0, -150]);
    const y4 = useTransform(scrollY, [0, 300], [0, -175]);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
            controls.start('show');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <Flex
            id='intro'
            h='calc(100vh - 16vh)'
            bg='teal.600'
            flexDirection='column'
            alignItems='center'
            pos='relative'
            fontFamily={theme.font_body}
            textColor={theme.text_light}
            justifyContent='flex-end'>
            {/* Intro Title */}
            <Box
                as={MBox}
                zIndex='10'
                textAlign='center'
                mb='32'
                px='12'
                initial='hidden'
                ref={ref}
                animate={controls}
                // animate={'show'}
                variants={container}>
                {/* Intro */}
                <Text
                    as={MText}
                    variants={item}
                    fontSize='md'
                    style={{ y: y1, x: 0 }}>
                    {data.attribute1}
                </Text>
                {/* Nama Pasangan */}
                <Text
                    as={MText}
                    variants={item}
                    fontFamily={theme.font_display}
                    fontSize='5xl'
                    style={{ y: y2, x: 0 }}
                    fontWeight='normal'>
                    {data.title}
                </Text>
                <br />
                <Text
                    as={MText}
                    variants={item}
                    fontSize='lg'
                    style={{ y: y3, x: 0 }}>
                    {dateConvert.display(data.date)}
                </Text>
                <br />
                <Text
                    as={MText}
                    variants={item}
                    fontSize='md'
                    style={{ y: y4, x: 0 }}>
                    {data.attribute2}
                </Text>
            </Box>

            {/* Background Image */}
            <Img
                zIndex='0'
                h='full'
                w='full'
                // layout='fill'
                style={{ filter: 'brightness(50%) grayscale(100%)' }}
                pos='absolute'
                objectFit='cover'
                src={data.img}
            />
            <Img
                zIndex='20'
                // layout='fill'
                // style={{ filter: 'brightness(50%)' }}
                pos='absolute'
                bottom='0'
                transform='auto'
                // translateY='-40'
                // transformOrigin='bottom'
                // border='0'
                // objectFit='cover'
                src={
                    'https://opmdapizldpzeylobaik.supabase.in/storage/v1/object/public/fileupload/assets/bottom-stroke-2.png'
                }
            />
        </Flex>
    );
};

export default Intro;
