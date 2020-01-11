import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Text, Box } from 'rebass';
import HeaderLink from './HeaderLink';
import Hamburger from './Hamburger';
import { Link } from 'gatsby';

import Icon from '../../assets/images/icon.svg';

const StaticHeader = ({ showBuild, selected }) => {
  const [pinned, setPinned] = useState(true);
  const isPinned = () => setPinned(true);
  const isUnpinned = () => setPinned(false);

  return (
    <React.Fragment>
      <Hamburger isPinned={pinned} selected={selected} />

      <Headroom
        onPin={isPinned}
        onUnpin={isUnpinned}
        wrapperStyle={{ height: '200px' }}
      >
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          px={3}
          pt={'16px'}
          pb={'10px'}
        >
          <Flex alignItems="center">
            <Link to="/">
              <Image
                src={Icon}
                width="30px"
                ml={[0, 2, 4]}
                mt={'4px'}
                alt="Logo"
                style={{
                  cursor: 'pointer',
                }}
              />
            </Link>
            <Box width="1px" height="47px" bg="#AAAAAA" mx={3}></Box>
            <Text color="#081E2A" fontSize="28px" fontWeight="black">
              Gatsby
            </Text>
            <Text color="#4C5E68" fontSize="28px" fontWeight="black">
              Starter
            </Text>
          </Flex>
          <Flex mr={[0, 3, 5]} className="desktop-menu">
            <Box mr={[4, 4, 4, 5]}>
              <HeaderLink selected={selected === 'about'} to="/about">
                Section 01
              </HeaderLink>
            </Box>
          </Flex>
        </Flex>
      </Headroom>
    </React.Fragment>
  );
};

export default StaticHeader;
