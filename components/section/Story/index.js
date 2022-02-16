import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { container, item } from '../../../utils/animation';
import { date } from '../../../utils/dateConvert';
import { MFlex, MotionText, MText } from '../../motion';

const Story = ({ data, theme }) => {
    // console.log({ story: data });

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });

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
            id='story'
            w='full'
            py='8'
            textColor={theme.text_dark}
            px='8'
            gap='2'
            flexDir='column'
            alignItems='center'
            bg={theme.bg_light}
            fontSize='sm'>
            <Text
                as={MText}
                // variants={item}
                fontSize='2xl'
                fontWeight='semibold'
                fontFamily={theme.font_display}
                textColor={theme.text_dark}
                variants={item}>
                Our Story
            </Text>
            <Flex
                flexDir='column'
                w='full'
                ref={ref}
                as={MFlex}
                animate={controls}
                variants={container}>
                {data.map((val, i) => (
                    <Flex key={i} w='full' as={MFlex} variants={item}>
                        <Box w='8' pos='relative'>
                            <Box
                                zIndex='10'
                                h={i === data.length - 1 ? '4' : 'full'}
                                marginLeft='auto'
                                marginRight='auto'
                                left='0'
                                right='0'
                                w='2px'
                                top={i === 0 ? '4' : 0}
                                bgColor={theme.text_semi}
                                pos='absolute'
                            />
                            <Circle
                                mt='4'
                                marginLeft='auto'
                                marginRight='auto'
                                left='0'
                                right='0'
                                size='4'
                                zIndex='40'
                                bgColor={theme.text_dark}
                                pos='absolute'
                            />
                        </Box>
                        <Box
                            bgColor={theme.text_dark}
                            ml='1'
                            transform='auto'
                            rotate='45'
                            h='4'
                            w='4'
                            translateY='4'
                            translateX='2'
                            zIndex='0'
                        />
                        <Box
                            zIndex='40'
                            flex='1'
                            mb={i === data.length - 1 ? '0' : '4'}
                            borderColor={theme.text_dark}
                            bgColor={theme.bg_light}
                            border='2px'
                            px='4'
                            py='2'
                            rounded='lg'
                            maxH='40'
                            overflowX='scroll'>
                            <Text
                                fontWeight='bold'
                                textColor={theme.text_semi}
                                fontFamily={theme.font_display}>
                                {date(val.date)}
                            </Text>
                            <Text fontSize='sm'>{val.text}</Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Story;
