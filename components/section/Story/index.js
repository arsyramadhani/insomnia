import { Box, Circle, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { MotionText, MText } from '../../motion';

const Story = ({ data, theme }) => {
    console.log({ story: data });
    return (
        <Flex
            id='story'
            w='full'
            py='8'
            textColor={theme.text_dark}
            px='8'
            gap='4'
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
                textColor={theme.text_dark}>
                Our Story
            </Text>
            <Flex flexDir='column' bg='gray.400' w='full' minH='400px'>
                {data.map((val, i) => (
                    <Flex bgColor='gray.200' w='full'>
                        <Box bgColor='gray.300' w='8' pos='relative'>
                            <Circle
                                mx='auto'
                                size='4'
                                zIndex='40'
                                bgColor='yellow.300'
                            />
                            <Box
                                zIndex='10'
                                h='full'
                                marginLeft='auto'
                                marginRight='auto'
                                left='0'
                                right='0'
                                w='1'
                                top='0'
                                bgColor='blue.300'
                                pos='absolute'
                            />
                        </Box>
                        <Box h='12'>xaxa</Box>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};

export default Story;
