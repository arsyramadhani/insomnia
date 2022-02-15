import { Box, Center, Flex, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MFlex = new motion(Flex);
const MText = new motion(Text);
const MBox = new motion(Box);
const MStack = new motion(Stack);
const MCenter = new motion(Center);

const MotionText = ({ children, ...rest }) => {
    return (
        <Text as={MText} {...rest}>
            {children}
        </Text>
    );
};

export { MFlex, MText, MBox, MStack, MCenter, MotionText };
