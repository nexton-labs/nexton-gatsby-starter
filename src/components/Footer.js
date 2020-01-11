import React from 'react';
import { Flex, Box, Text, Link } from 'rebass';

const Footer = () => (
  <Flex>
    <Box width="100%" height="60px" bg="#DCEAEA">
      <Text textAlign="center" mt={3} fontSize={2}>
        @2020 - Gatsby Starter -{' '}
        <Link href="https://www.nextonlabs.com/">Nexton Labs</Link>
      </Text>
    </Box>
  </Flex>
);

export default Footer;
