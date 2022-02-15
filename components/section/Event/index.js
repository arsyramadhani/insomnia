import React, { useEffect } from 'react';
import {
    motion,
    AnimatePresence,
    useAnimation,
    useViewportScroll,
    useTransform
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { item, container } from '../../../utils/animation';
import { Flex, Text } from '@chakra-ui/react';
import dateConvert from '../../../utils/dateConvert';
import { MText } from '../../motion';

const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const Event = ({ data, theme }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });
    console.log(data);
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
            id='event'
            w='full'
            py='8'
            px='8'
            flexDir='column'
            alignItems='center'
            fontSize='sm'
            gap='8'
            bgColor={theme.text_dark}>
            {/* <Text
                as={MotionText}
                fontSize='2xl'
                fontWeight='semibold'
                textColor={theme.text_light}
                fontFamily={theme.font_display}>
                Let&apos;s Celebrate
            </Text> */}
            <Text
                as={MText}
                textColor={theme.text_light}
                fontWeight='thin'
                textAlign='center'>
                Merupakan suatu kehormatan dan kebahagiaan bagi kami atas
                kehadiran Bapak/Ibu/Saudara/i untuk memberikan doa restu kepada
                putra-putri kami.
            </Text>
            {data.map((val, i) => (
                <Flex
                    key={i}
                    textAlign='center'
                    alignItems='center'
                    flexDir='column'
                    textColor={theme.text_dark}
                    w='full'
                    bgColor={theme.bg_light}
                    p='8'
                    fontFamily={theme.font_body}
                    rounded='md'>
                    <Text
                        as={MText}
                        fontSize='2xl'
                        fontWeight='semibold'
                        textColor={theme.textSemi}
                        fontFamily={theme.font_display}>
                        {val.title}
                    </Text>
                    <br />
                    <Text as={MText}>{dateConvert.full(val.date)}</Text>
                    <Text as={MText}>
                        {dateConvert.time(val.date) +
                            ' - ' +
                            (val.duration === 0
                                ? 'selesai'
                                : dateConvert.time(val.date, val.duration))}
                    </Text>
                    <br />
                    <Text as={MText} fontWeight='bold'>
                        {val.location}
                    </Text>
                    <Text as={MText}>{val.address}</Text>
                </Flex>
            ))}
        </Flex>
    );
};

export default Event;
