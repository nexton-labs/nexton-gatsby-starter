import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Flex, Image, Button, Box } from 'rebass';
import HeaderLink from './HeaderLink';
import Hamburger from './Hamburger';
import { Link } from 'gatsby';
import Logo from '../../assets/images/nexton-logo.svg';

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
          <Link to="/">
            <Image
              src={Logo}
              width="120px"
              ml={[0, 2, 4]}
              mt={'4px'}
              alt="Nexton Logo"
              style={{
                cursor: 'pointer',
              }}
            />
          </Link>
          <Flex mr={[0, 3, 5]} className="desktop-menu">
            <Box mr={[4, 4, 4, 5]} mt={2} fontSize={1}>
              <HeaderLink selected={selected === 'about'} to="/about">
                ABOUT
              </HeaderLink>
            </Box>
          </Flex>
        </Flex>
      </Headroom>
    </React.Fragment>
  );
};

export default StaticHeader;
