import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { item, container } from '../../../utils/animation';

const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const Doa = ({ data, theme }) => {
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
        <Flex bgColor={theme.text_dark}>
            <MotionFlex
                ref={ref}
                id='mempelai'
                w='full'
                py='12'
                px='12'
                flexDir='column'
                alignItems='center'
                textAlign='center'
                fontSize='sm'
                animate={controls}
                variants={container}
                textColor={theme.text_light}>
                <Text
                    as={MotionText}
                    variants={item}
                    fontWeight='thin'
                    fontStyle='italic'>
                    {data.text}
                </Text>
                <br />
                <Text
                    as={MotionText}
                    variants={item}
                    fontSize='md'
                    fontFamily={theme.font_display}>
                    {data.title}
                </Text>
            </MotionFlex>
        </Flex>
    );
};

export default Doa;
