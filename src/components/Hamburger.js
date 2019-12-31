import React from 'react';
import { Flex, Button, Box } from 'rebass';
import HeaderLink from './HeaderLink';
import { Link } from 'gatsby';
import Menu from 'react-burger-menu/lib/menus/slide';
import '../../assets/hamburger.css';

const Hamburger = ({ isPinned, selected }) => {
  return (
    <Menu
      right
      disableAutoFocus
      burgerButtonClassName={
        isPinned ? 'button-pinned mobile-menu' : 'button-not-pinned mobile-menu'
      }
    >
      <Box width="100%" height="1px" mt={4}></Box>
      <Box my={4}>
        <HeaderLink selected={selected === 'about'} to="/about">
          ABOUT NEXTON
        </HeaderLink>
      </Box>
      
    </Menu>
  );
};

export default Hamburger;
