import React from 'react';
import { Flex, Box, Image } from 'rebass';

import Starter from '../../assets/images/starter.png';

const HiThere = () => (
  <Flex alignItems="center" flexDirection="column" my={[5, 6]} mx={[5, 6]}>
    <Image src={Starter}></Image>
  </Flex>
);

export default HiThere;
