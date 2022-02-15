import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import dateConvert from '../../../utils/dateConvert';
import { MText } from '../../motion';

const Countdown = ({ data, theme }) => {
    const [timeLeft, setTimeLeft] = useState(
        dateConvert.calculateTimeLeft(data)
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(dateConvert.calculateTimeLeft(data));
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <Flex
            id='countdown'
            w='full'
            py='8'
            px='8'
            gap='4'
            flexDir='column'
            alignItems='center'
            fontSize='sm'
            bgColor={theme.bg_light}>
            <Text
                as={MText}
                // variants={item}
                fontSize='2xl'
                fontWeight='semibold'
                fontFamily={theme.font_display}
                textColor={theme.text_dark}>
                Let&apos;s Celebrate
            </Text>
            <Flex width='full' gap='4'>
                {/* timeLeft.days, timeLeft.hours, timeLeft.minutes */}
                {[
                    {
                        time: timeLeft.days,
                        title: 'Days'
                    },
                    {
                        time: timeLeft.hours,
                        title: 'Hours'
                    },
                    {
                        time: timeLeft.minutes,
                        title: 'Minutes'
                    }
                ].map(val => (
                    <Flex
                        key={val.title}
                        h='24'
                        w='24'
                        flex='1'
                        rounded='md'
                        border='2px'
                        borderColor={theme.text_dark}
                        textColor={theme.text_dark}
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'>
                        <Text fontSize='3xl' fontFamily={theme.font_display}>
                            {val.time}
                        </Text>
                        <Text>{val.title}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Countdown;
