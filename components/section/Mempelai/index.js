import { Box, Circle, Flex, Img, Stack, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { item, container } from '../../../utils/animation';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionStack = motion(Stack);
const MotionCircle = motion(Circle);

const Mempelai = ({ data, theme }) => {
    console.log({ mempelai: data });

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
        <MotionFlex
            id='mempelai'
            w='full'
            py='8'
            px='8'
            flexDir='column'
            alignItems='center'
            fontSize='sm'
            bgColor={theme.bg_light}>
            <MotionBox animate={controls} variants={container}>
                <MotionStack gap='4' textAlign='center' mb='8'>
                    <MotionText
                        variants={item}
                        fontSize='3xl'
                        fontWeight='semibold'
                        fontFamily={theme.font_display}
                        textColor={theme.text_dark}>
                        Groom & Bride
                    </MotionText>
                    <MotionText variants={item}>
                        Assalamu’alaikum Warahmatullahi Wabarakatuh
                    </MotionText>
                    <MotionText variants={item}>
                        Maha suci Allah SWT yang telah menciptakan makhluk-Nya
                        berpasang-pasangan. Ya Allah, perkenankanlah kami
                        merangkai kasih sayang yang Kau ciptakan di antara
                        putra-putri kami:
                    </MotionText>
                </MotionStack>
                <MotionStack gap='4' textAlign='center' ref={ref}>
                    {data.map((val, i) => (
                        <MotionFlex
                            flexDirection='column'
                            alignItems='center'
                            gap='2'
                            key={i}>
                            <MotionCircle variants={item} size='48'>
                                <Img
                                    border='4'
                                    w='full'
                                    h='full'
                                    objectFit='cover'
                                    rounded='full'
                                    src={val.img}
                                />
                            </MotionCircle>
                            <MotionText
                                variants={item}
                                fontSize='2xl'
                                fontWeight='semibold'
                                fontFamily={theme.font_display}
                                textColor={theme.text_dark}>
                                {val.fullname}
                            </MotionText>
                            <MotionText variants={item}>
                                {val.gender === 'female' ? 'Putri' : 'Putra'}{' '}
                                ke-
                                {val.child_no} dari pasangan
                            </MotionText>
                            <MotionText variants={item} fontWeight='semibold'>
                                {val.father}
                                {' & '}
                                <br /> {val.mother}
                            </MotionText>
                            {i === 0 && (
                                <Text
                                    as={MotionText}
                                    variants={item}
                                    fontFamily={theme.font_display}
                                    fontSize='6xl'
                                    textColor={theme.text_dark}
                                    fontWeight='normal'>
                                    &
                                </Text>
                            )}
                        </MotionFlex>
                    ))}
                </MotionStack>
            </MotionBox>
        </MotionFlex>
    );
};

export default Mempelai;
